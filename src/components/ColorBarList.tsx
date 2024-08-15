import { useState, Fragment } from 'react';
import ColorBar from './ColorBar';
import ContrastBox from './ContrastBox';
import ThirdColor from './ThirdColor';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

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
        if (!result.destination) {
            return;
        }

        const newColorBars = Array.from(colorBars);
        const [movedColor] = newColorBars.splice(result.source.index, 1);
        newColorBars.splice(result.destination.index, 0, movedColor);

        setColorBars(newColorBars);
    };

    if (selectedMode === 'third') {
        return <ThirdColor selectedContrast={selectedContrast} />;
    }

    return (
        <div className="color-bars">
            {
                <DragDropContext onDragEnd={onDragEnd}>
                    <Droppable droppableId="colorBars" direction="horizontal">
                        {(provided) => (
                            <div
                                {...provided.droppableProps}
                                ref={provided.innerRef}
                                style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    flexWrap: 'wrap',
                                }}
                            >
                                {colorBars.map((color, index) => (
                                    <Draggable
                                        key={index}
                                        draggableId={`color-${index}`}
                                        index={index}
                                    >
                                        {(provided, snapshot) => (
                                            <Fragment>
                                                <div
                                                    className="color-bar-container"
                                                    ref={provided.innerRef}
                                                    {...provided.draggableProps}
                                                    {...provided.dragHandleProps}
                                                    style={{
                                                        margin: '8px',
                                                        ...provided
                                                            .draggableProps
                                                            .style,
                                                        backgroundColor:
                                                            snapshot.isDragging
                                                                ? 'transparent'
                                                                : 'transparent',
                                                        borderRadius: '5px',
                                                    }}
                                                >
                                                    <ColorBar
                                                        color={color}
                                                        selectedMode={
                                                            selectedMode
                                                        }
                                                        onColorChange={(
                                                            newColor,
                                                        ) => {
                                                            handleColorChange(
                                                                index,
                                                                newColor,
                                                            );
                                                        }}
                                                        onRemove={() => {
                                                            removeColorBar(
                                                                index,
                                                            );
                                                        }}
                                                        allColors={colorBars} // Pass all colors to each ColorBar
                                                        selectedContrast={
                                                            selectedContrast
                                                        }
                                                    />
                                                    {selectedMode ===
                                                        'neighbor' &&
                                                        index <
                                                            colorBars.length -
                                                                1 && (
                                                            <ContrastBox
                                                                leftColor={
                                                                    colorBars[
                                                                        index
                                                                    ]
                                                                }
                                                                rightColor={
                                                                    colorBars[
                                                                        index +
                                                                            1
                                                                    ]
                                                                }
                                                                selectedContrast={
                                                                    selectedContrast
                                                                }
                                                            />
                                                        )}
                                                </div>
                                            </Fragment>
                                        )}
                                    </Draggable>
                                ))}
                                {provided.placeholder}
                            </div>
                        )}
                    </Droppable>
                </DragDropContext>
            }
            {colorBars.length < 10 && (
                <div
                    className="color-bar-container"
                    style={{ margin: '8px', borderRadius: '5px' }}
                >
                    {' '}
                    {/* Add margin for spacing */}
                    <div className="color-bar-outer add-color-bar">
                        <button
                            onClick={addColorBar}
                            className="add-color-bar-button"
                        >
                            + Add color
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ColorBarList;
