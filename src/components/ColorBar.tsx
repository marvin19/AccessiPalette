import React, { useState, useEffect } from 'react';
import { calculateContrastRatio } from '../utils'; // Ensure this function is correctly implemented in utils
import closeButton from '../assets/x-close.svg'; // Ensure this asset exists
import ColorPicker from './ColorPicker'; // Ensure this component is correctly implemented
import ContrastBoxFull from './ContrastBoxFull'; // Ensure this component is correctly implemented

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
    const [textColor, setTextColor] = useState('#000000');

    useEffect(() => {
        const textContrastRatio = calculateContrastRatio('#000000', color);
        if (textContrastRatio < 3.0) {
            setTextColor('#FFFFFF');
        } else {
            setTextColor('#000000');
        }
    }, [color]);

    const handleColorChange = (newColor: string): void => {
        onColorChange(newColor);
    };

    const otherColors = allColors.filter((c) => c !== color);
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
                        <p
                            className="contrast-text"
                            style={{ color: textColor }}
                        >
                            {textContrastRatio.toFixed(2)}:1
                        </p>
                        <p
                            className="contrast-text-label"
                            style={{ color: textColor }}
                        >
                            Text Contrast Ratio
                        </p>
                    </div>
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
