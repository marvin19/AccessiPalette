import AddNewColor from './AddNewColor';
import ColorBar from './ColorBar';
import ContrastBox from './ContrastBox';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

interface NeighborProps {
    colorBars: string[];
    selectedMode: string;
    selectedContrast: number;
    handleColorChange: (index: number, newColor: string) => void;
    removeColorBar: (index: number) => void;
    addColorBar: () => void;
    setColorBars: (newColors: string[]) => void;
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
                                            selectedContrast={selectedContrast}
                                        />
                                        {selectedMode === 'neighbor' &&
                                            index < colorBars.length - 1 && (
                                                <ContrastBox
                                                    leftColor={colorBars[index]}
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
};

export default Neighbor;
