interface ColorPickerProps {
    color: string;
    onColorChange: (color: string) => void;
}

const ColorPicker: React.FC<ColorPickerProps> = ({ color, onColorChange }) => {
    const colorInputId = `color-input-${color}`;

    // Faking a click on the color input to make the clickable area bigger
    const handleClick = (): void => {
        document.getElementById(colorInputId)?.click();
    };

    return (
        <div
            className="color-picker-container"
            onClick={handleClick}
            style={{ cursor: 'pointer' }}
        >
            <div className="color-picker">
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
            <p>{color}</p>
        </div>
    );
};

export default ColorPicker;
