import { useRef, useId } from 'react';

interface ColorPickerProps {
    color: string;
    onColorChange: (color: string) => void;
}

const ColorPicker: React.FC<ColorPickerProps> = ({ color, onColorChange }) => {
    const colorInputRef = useRef<HTMLInputElement>(null);
    const uniqueId = useId().replace(/:/g, '');

    // Faking a click on the color input to make the clickable area bigger
    const handleClick = (): void => {
        colorInputRef.current?.click();
    };

    return (
        <div
            className="color-picker-container"
            onClick={handleClick}
            style={{ cursor: 'pointer' }}
        >
            <div className="color-picker">
                <label
                    htmlFor={`color-input-${uniqueId}`}
                    className="visually-hidden"
                >
                    Choose color
                </label>
                <input
                    ref={colorInputRef}
                    id={`color-input-${uniqueId}`}
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
