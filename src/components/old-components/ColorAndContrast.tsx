import React from 'react';
import { renderColorAndContrastBoxes } from '../../utils';

interface ColorAndContrastProps {
    colors: string[];
    visibleColors: number;
    selectedContrast: number;
    paletteType: string;
}

const ColorAndContrast: React.FC<ColorAndContrastProps> = ({
    selectedContrast,
    colors,
    visibleColors,
    paletteType,
}): JSX.Element => {
    return (
        <div className="color-box-container">
            {renderColorAndContrastBoxes(
                colors,
                visibleColors,
                selectedContrast,
                paletteType,
            )}
        </div>
    );
};

export default ColorAndContrast;
