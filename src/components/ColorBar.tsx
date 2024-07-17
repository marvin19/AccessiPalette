import React from 'react';
import { calculateContrastRatio } from '../utils';
import closeButton from '../assets/x-close.svg';
import ColorPicker from './ColorPicker';
import ContrastBoxFull from './ContrastBoxFull';

interface ColorBarProps {
    onRemove: () => void;
    color: string;
    selectedMode: string;
    onColorChange: (color: string) => void;
    allColors: string[];
}

const ColorBar: React.FC<ColorBarProps> = ({
    onRemove,
    color,
    selectedMode,
    onColorChange,
    allColors,
}): JSX.Element => {
    const handleColorChange = (newColor: string): void => {
        onColorChange(newColor);
    };

    const otherColors = allColors.filter((c) => c !== color);
    const textColor = '#000000';
    const textContrastRatio = calculateContrastRatio(textColor, color);
    const parentClass = selectedMode !== 'neighbor' ? 'all' : 'neighbor';

    return (
        <div
            className={`color-bar-outer ${parentClass}`}
            style={{ backgroundColor: color }}
        >
            <div className="color-bar-inner">
                <div className="color-bar-inner-inner">
                    <div className="contrast-text-container">
                        <p className="contrast-text">
                            {textContrastRatio.toFixed(2)}:1
                        </p>
                    </div>
                    <p className="contrast-text-label">Text Contrast Ratio</p>
                </div>
                {selectedMode !== 'neighbor' && (
                    <ContrastBoxFull
                        activeColor={color}
                        otherColors={otherColors}
                    />
                )}
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
