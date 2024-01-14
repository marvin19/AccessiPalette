type ColorPickerProps = {
  color: string;
  onColorChange: (color: string) => void;
}

const ColorPicker: React.FC<ColorPickerProps> = ({ color, onColorChange }) => {

  console.log(color);
  
  return (
      <input type="color" value={color} onChange={(e) => onColorChange(e.target.value)}/>
    );
    
}

export default ColorPicker;