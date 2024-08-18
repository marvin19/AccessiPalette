import React from 'react';
import { calculateContrastRatio } from '../utils';
import closeButton from '../assets/x-close.svg';
import ColorPicker from './ColorPicker';
import ContrastBoxFull from './ContrastBoxFull';

interface ColorBarProps {
    color: string;
    selectedMode?: string;
    allColors?: string[];
    selectedContrast?: number;
    onRemove?: () => void;
    onColorChange?: (color: string) => void;
}

const ColorBar: React.FC<ColorBarProps> = ({
    onRemove = () => {},
    color,
    selectedMode,
    onColorChange = () => {},
    allColors = [],
    selectedContrast,
}): JSX.Element => {
    const handleColorChange = (newColor: string): void => {
        onColorChange(newColor);
    };

    const otherColors = allColors.filter((c) => c !== color);
    const textColor = '#000000';
    const textContrastRatio = calculateContrastRatio(textColor, color);
    let parentClass = '';

    if (selectedMode === 'neighbor') {
        parentClass = 'neighbor';
    } else if (selectedMode === 'all') {
        parentClass = 'all';
    } else if (selectedMode === 'thirdMode') {
        parentClass = 'third';
    }

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
                {selectedMode === 'all' && (
                    <ContrastBoxFull
                        activeColor={color}
                        otherColors={otherColors}
                        selectedContrast={selectedContrast ?? 0}
                    />
                )}
                <ColorPicker color={color} onColorChange={handleColorChange} />
            </div>
            <button className="remove-color" onClick={onRemove}>
                <img src={closeButton} className="close-button" alt="Remove" />
            </button>
        </div>
    );
};

export default ColorBar;
