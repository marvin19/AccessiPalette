import AddNewColor from './AddNewColor';
import ColorBar from './ColorBar';
import CompareAll from './CompareAll';
import ContrastBox from './ContrastBox';
import ThirdColor from './ThirdColor';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { useState } from 'react';

const defaultColors = [
    '#6975ff',
    '#084fd7',
    '#64bdc6',
    '#eeca34',
    '#fe7135',
    '#fd2a2a',
];

interface ColorBarListProps {
    selectedContrast: number;
    selectedMode: string;
}

const ColorBarList = ({
    selectedContrast,
    selectedMode,
}: ColorBarListProps): JSX.Element => {
    const [colorBars, setColorBars] = useState<string[]>(defaultColors);

    const addColorBar = (): void => {
        if (colorBars.length < 10) {
            const randomIndex = Math.floor(
                Math.random() * defaultColors.length,
            );
            const newColor = defaultColors[randomIndex];
            setColorBars([...colorBars, newColor]);
        }
    };

    const removeColorBar = (index: number): void => {
        if (colorBars.length > 2) {
            setColorBars(colorBars.filter((_, i) => i !== index));
        }
    };

    const handleColorChange = (index: number, newColor: string): void => {
        const updatedColors = [...colorBars];
        updatedColors[index] = newColor;
        setColorBars(updatedColors);
    };

    const onDragEnd = (result: any): void => {
        /* eslint-disable @typescript-eslint/strict-boolean-expressions */
        if (
            result.destination &&
            typeof result.destination.index === 'number'
        ) {
            const sourceIndex: number = result.source.index as number;
            const destinationIndex: number = result.destination.index as number;

            const newColorBars = Array.from(colorBars);
            const [movedColor] = newColorBars.splice(sourceIndex, 1);
            newColorBars.splice(destinationIndex, 0, movedColor);

            setColorBars(newColorBars);
        }
    };

    if (selectedMode === 'third') {
        return <ThirdColor selectedContrast={selectedContrast} />;
    } else if (selectedMode === 'all') {
        return (
            <CompareAll
                colorBars={colorBars}
                selectedMode={selectedMode}
                selectedContrast={selectedContrast}
                addColorBar={addColorBar}
                handleColorChange={handleColorChange}
                removeColorBar={removeColorBar}
            />
        );
    } else {
        return (
            <DragDropContext onDragEnd={onDragEnd}>
                <Droppable droppableId="colorBars" direction="horizontal">
                    {(provided) => (
                        <div
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                            className="color-bars"
                        >
                            {colorBars.map((color, index) => (
                                <Draggable
                                    key={index}
                                    draggableId={`color-${index}`}
                                    index={index}
                                >
                                    {(provided) => (
                                        <div
                                            ref={provided.innerRef}
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                            className="color-bar-container"
                                        >
                                            <ColorBar
                                                color={color}
                                                selectedMode={selectedMode}
                                                onColorChange={(newColor) => {
                                                    handleColorChange(
                                                        index,
                                                        newColor,
                                                    );
                                                }}
                                                onRemove={() => {
                                                    removeColorBar(index);
                                                }}
                                                allColors={colorBars}
                                                selectedContrast={
                                                    selectedContrast
                                                }
                                            />
                                            {selectedMode === 'neighbor' &&
                                                index <
                                                    colorBars.length - 1 && (
                                                    <ContrastBox
                                                        leftColor={
                                                            colorBars[index]
                                                        }
                                                        rightColor={
                                                            colorBars[index + 1]
                                                        }
                                                        selectedContrast={
                                                            selectedContrast
                                                        }
                                                    />
                                                )}
                                        </div>
                                    )}
                                </Draggable>
                            ))}
                            {provided.placeholder}
                            <AddNewColor
                                addColorBar={addColorBar}
                                colorBars={colorBars}
                            />
                        </div>
                    )}
                </Droppable>
            </DragDropContext>
        );
    }
};

export default ColorBarList;
