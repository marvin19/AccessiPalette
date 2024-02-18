interface ColorPickerProps {
  color: string;
  onColorChange: (color: string) => void;
}

const ColorPicker: React.FC<ColorPickerProps> = ({ color, onColorChange }) => {
  const colorInputId = `color-input-${color}`;

  return (
    <div>
      <label htmlFor={colorInputId} className="visually-hidden">
        Choose color
      </label>
      <input
        id={colorInputId}
        type="color"
        value={color}
        onChange={(e) => {
          onColorChange(e.target.value);
        }}
      />
    </div>
  );
};

export default ColorPicker;
