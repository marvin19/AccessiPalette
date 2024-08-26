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
    const colorBarRefs = useRef<Array<HTMLDivElement | null>>([]);

    useEffect(() => {
        if (selectedIndex !== null) {
            colorBarRefs.current[selectedIndex]?.focus();
        }
    }, [selectedIndex]);

    const handleKeyDown = (event: React.KeyboardEvent, index: number): void => {
        if (event.key === 'ArrowRight' && index < colorBars.length - 1) {
            setSelectedIndex(index + 1);
            console.log('ArrowRight');
        } else if (event.key === 'ArrowLeft' && index > 0) {
            console.log('ArrowLeft');
            setSelectedIndex(index - 1);
        } else if (event.key === ' ' && selectedIndex !== null) {
            console.log('Enter is pressed');
        }
    };

    return (
        <div className="color-bars">
            {colorBars.map((color, index) => (
                <div
                    key={index}
                    className={`color-bar-container ${index === selectedIndex ? 'selected' : ''}`}
                    tabIndex={0}
                    ref={(el) => (colorBarRefs.current[index] = el)}
                    onClick={() => {
                        setSelectedIndex(index);
                    }}
                    onKeyDown={(event) => {
                        handleKeyDown(event, index);
                    }}
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
