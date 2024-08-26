import AddNewColor from './AddNewColor';
import ColorBar from './ColorBar';
import ContrastBox from './ContrastBox';
import { useColorBarInteractions } from '../hooks/useColorBarInteractions';

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
    const {
        selectedIndex,
        draggedIndex,
        colorBarRefs,
        handleKeyDown,
        handleDragStart,
        handleDragEnter,
        handleDragEnd,
        setSelectedIndex,
    } = useColorBarInteractions({ colorBars, setColorBars });

    const handleClick = (index: number, event: React.MouseEvent): void => {
        if (draggedIndex === null) {
            setSelectedIndex(null); // This removes focus
            (event.currentTarget as HTMLDivElement).blur();
        } else {
            setSelectedIndex(index);
        }
    };

    return (
        <div
            className="color-bars"
            onClick={() => {
                setSelectedIndex(null);
            }}
        >
            {colorBars.map((color, index) => (
                <div
                    key={index}
                    className={`color-bar-container ${index === selectedIndex ? 'selected' : ''} ${
                        index === selectedIndex && draggedIndex !== null
                            ? 'dragging'
                            : ''
                    }`}
                    tabIndex={0}
                    draggable // Enable drag-and-drop
                    ref={(el) => (colorBarRefs.current[index] = el)}
                    onClick={(event) => {
                        handleClick(index, event);
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
                    onDragOver={(event) => {
                        event.preventDefault();
                    }} // Prevent default drag image
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
