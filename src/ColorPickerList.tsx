import ColorPicker from './ColorPicker';
import ColorText from './ColorText';

type ColorPickerListProps = {
    colors: string[];
    visibleColors: number;
    handleColorChange: (color: string, index: number) => void;
}

const ColorPickerList: React.FC<ColorPickerListProps> = ({ colors, handleColorChange, visibleColors }) => {

  const colorPickers = colors.slice(0, visibleColors).map((color, index) => {
    return (<li key={index}>
      <ColorText
        color={color}
        onColorChange={(newColor) => handleColorChange(newColor, index)}
      />
      <ColorPicker
          color={color}
          onColorChange={(newColor) => handleColorChange(newColor,index)}
        />
      </li>)
  });

  return (
    <div>
      <ul>
      {colorPickers}
      </ul>
    </div>
  )
}

export default ColorPickerList