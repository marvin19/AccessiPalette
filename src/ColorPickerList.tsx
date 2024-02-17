import { FaPlusSquare } from 'react-icons/fa';
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

  return (
          <ul>
            {colors.slice(0, visibleColors).map((color, index) => (
                <li className="color-pickers draggable">
                  <>
                    <div><FaPlusSquare /></div>
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
            ))}
          </ul>
  )
}

export default ColorPickerList