import React from 'react';
import closeButton from '../assets/x-close.svg';
import ColorPicker from './ColorPicker';

interface ColorBarProps {
    onRemove: () => void;
    color: string;
    onColorChange: (color: string) => void;
}

const ColorBar: React.FC<ColorBarProps> = ({
    onRemove,
    color,
    onColorChange,
}): JSX.Element => {
    const handleColorChange = (newColor: string): void => {
        onColorChange(newColor);
    };

    return (
        <div className="color-bar-outer" style={{ backgroundColor: color }}>
            <div className="color-bar-inner">
                <div className="color-bar-inner-inner">
                    <div className="contrast-text-container">
                        <p className="contrast-text">4.5:1</p>
                    </div>
                    <p className="contrast-text-label">Text Contrast Ratio</p>
                </div>
                <div className="color-picker-container">
                    <ColorPicker
                        color={color}
                        onColorChange={handleColorChange}
                    />
                    <p>{color}</p>
                </div>
            </div>
            <button className="remove-color" onClick={onRemove}>
                <img src={closeButton} className="close-button" alt="Remove" />
            </button>
        </div>
    );
};

export default ColorBar;
