import React, { useState, useEffect, useRef } from 'react';
import AddNewColor from './AddNewColor';
import ColorBar from './ColorBar';
import ContrastBox from './ContrastBox';

interface NeighborProps {
    colorBars: string[];
    selectedMode: 'all' | 'third' | 'neighbor';
    selectedContrast: number;
    handleColorChange: (index: number, newColor: string) => void;
    removeColorBar: (index: number) => void;
    addColorBar: () => void;
    setColorBars: (newColorBars: string[]) => void;
}

const Neighbor = ({
    colorBars,
    selectedMode,
    selectedContrast,
    handleColorChange,
    removeColorBar,
    addColorBar,
    setColorBars,
}: NeighborProps): JSX.Element => {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
    const [draggedIndex, setDraggedIndex] = useState<number | null>(null);
    const colorBarRefs = useRef<Array<HTMLDivElement | null>>([]);

    useEffect(() => {
        if (selectedIndex !== null) {
            colorBarRefs.current[selectedIndex]?.focus();
        }
    }, [selectedIndex]);

    const swapColors = (fromIndex: number, toIndex: number): void => {
        const newColorBars = [...colorBars];
        const temp = newColorBars[fromIndex];
        newColorBars[fromIndex] = newColorBars[toIndex];
        newColorBars[toIndex] = temp;
        setColorBars(newColorBars);
        setDraggedIndex(toIndex); // Update draggedIndex to follow the moved color bar
    };

    const handleKeyDown = (event: React.KeyboardEvent, index: number): void => {
        if (event.key === 'ArrowRight' && index < colorBars.length - 1) {
            if (draggedIndex !== null && draggedIndex === selectedIndex) {
                if (selectedIndex !== null) {
                    swapColors(selectedIndex, selectedIndex + 1);
                    setSelectedIndex(selectedIndex + 1);
                }
            } else {
                setSelectedIndex(index + 1);
            }
        } else if (event.key === 'ArrowLeft' && index > 0) {
            if (draggedIndex !== null && draggedIndex === selectedIndex) {
                if (selectedIndex !== null) {
                    swapColors(selectedIndex, selectedIndex - 1);
                    setSelectedIndex(selectedIndex - 1);
                }
            } else {
                setSelectedIndex(index - 1);
            }
        } else if (event.key === ' ' && selectedIndex !== null) {
            if (draggedIndex === null) {
                setDraggedIndex(selectedIndex);
            } else {
                setDraggedIndex(null);
                setSelectedIndex(null); // Remove focus after dropping

                // Cast currentTarget to HTMLDivElement and call blur
                (event.currentTarget as HTMLDivElement).blur();
            }
        }
    };

    const handleDragStart = (index: number): void => {
        setDraggedIndex(index);
    };

    const handleDragEnter = (index: number): void => {
        if (draggedIndex !== null && draggedIndex !== index) {
            swapColors(draggedIndex, index);
            setDraggedIndex(index);
            setSelectedIndex(index);
        }
    };

    const handleDragOver = (event: React.DragEvent): void => {
        // Prevent the default drag image
        event.preventDefault();
    };

    const handleDragEnd = (): void => {
        if (
            draggedIndex !== null &&
            draggedIndex >= 0 &&
            draggedIndex < colorBarRefs.current.length
        ) {
            const ref = colorBarRefs.current[draggedIndex];
            if (ref !== null && ref !== undefined) {
                ref.blur(); // Blur the last dragged element to remove focus
            }
        }
        setDraggedIndex(null);
        setSelectedIndex(null); // Remove focus after dropping
    };

    return (
        <div
            className="color-bars"
            onClick={() => {
                setSelectedIndex(null);
            }}
        >
            {' '}
            {/* Allow clicking outside to clear focus */}
            {colorBars.map((color, index) => (
                <div
                    key={index}
                    className={`color-bar-container ${index === selectedIndex ? 'selected' : ''} ${index === draggedIndex ? 'dragging' : ''}`}
                    tabIndex={0}
                    draggable // Enable drag-and-drop
                    ref={(el) => (colorBarRefs.current[index] = el)}
                    onClick={() => {
                        setSelectedIndex(index);
                    }}
                    onFocus={() => {
                        setSelectedIndex(index);
                    }}
                    onKeyDown={(event) => {
                        handleKeyDown(event, index);
                    }}
                    onDragStart={() => {
                        handleDragStart(index);
                    }}
                    onDragEnter={() => {
                        handleDragEnter(index);
                    }}
                    onDragOver={handleDragOver} // Prevent default drag image
                    onDragEnd={handleDragEnd}
                    style={{ transition: 'transform 0.3s ease' }}
                >
                    <ColorBar
                        color={color}
                        selectedMode={selectedMode}
                        onColorChange={(newColor) => {
                            handleColorChange(index, newColor);
                        }}
                        removeColorBar={() => {
                            removeColorBar(index);
                        }}
                        allColors={colorBars}
                        selectedContrast={selectedContrast}
                    />
                    {selectedMode === 'neighbor' &&
                        index < colorBars.length - 1 && (
                            <ContrastBox
                                leftColor={colorBars[index]}
                                rightColor={colorBars[index + 1]}
                                selectedContrast={selectedContrast}
                            />
                        )}
                </div>
            ))}
            <AddNewColor addColorBar={addColorBar} colorBars={colorBars} />
        </div>
    );
};

export default Neighbor;
