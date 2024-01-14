import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import ColorPicker from './ColorPicker';
import ColorText from './ColorText';

type ColorPickerListProps = {
    colors: string[];
    visibleColors: number;
    handleColorChange: (newColors: string[]) => void;
}

const ColorPickerList: React.FC<ColorPickerListProps> = ({ colors, handleColorChange, visibleColors }) => {

  const onColorChange = (newColor: string, index: number) => {
    const updatedColors = [...colors];
    updatedColors[index] = newColor;
    handleColorChange(updatedColors);
  }

  const onDragEnd = (result) => {
    if (!result.destination){
      return;
    }

    const newColors = Array.from(colors);
    const [removed] = newColors.splice(result.source.index, 1);
    newColors.splice(result.destination.index, 0, removed);

    // Update colors array in parent state
    handleColorChange(newColors);
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="droppable">
        {(provided) => (
          <ul {...provided.droppableProps} ref={provided.innerRef}>
            {colors.slice(0, visibleColors).map((color, index) => (
              <Draggable key={color} draggableId={color} index={index}>
                {(provided) => (
                  <li ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    <>
                      <ColorText
                        color={color}
                        onColorChange={(newColor) => onColorChange(newColor, index)}
                      />
                      <ColorPicker
                        color={color}
                        onColorChange={(newColor) => onColorChange(newColor, index)}
                      />
                    </>
                  </li>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </ul>
        )}
      </Droppable>
    </DragDropContext>
  )
}

export default ColorPickerList