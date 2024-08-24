import React, { useState, useEffect } from 'react';
import { calculateContrastRatio, getParentClassForMode } from '../utils';

import ColorPicker from './ColorPicker';
import ContrastBoxFull from './ContrastBoxFull';
import RemoveColorButton from './RemoveColorButton';

interface ColorBarProps {
    color: string;
    selectedMode?: string;
    allColors?: string[];
    selectedContrast?: number;
    onRemove?: () => void;
    onColorChange?: (color: string) => void;
}

const ColorBar: React.FC<ColorBarProps> = ({
    color,
    selectedMode,
    allColors = [],
    selectedContrast,
    onRemove = () => {},
    onColorChange = () => {},
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
    const parentClass = getParentClassForMode(selectedMode);

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
            <RemoveColorButton onRemove={onRemove} />
        </div>
    );
};

export default ColorBar;
