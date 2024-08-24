import React from 'react';
import { getParentClassForMode } from '../utils';
import ContrastText from './ContrastText';
import ColorPicker from './ColorPicker';
import ContrastBoxFull from './ContrastBoxFull';
import RemoveColorButton from './RemoveColorButton';
import useTextColor from '../hooks/useTextColor';

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
    const textColor = useTextColor(color);

    const handleColorChange = (newColor: string): void => {
        onColorChange(newColor);
    };

    const otherColors = allColors.filter((c) => c !== color);
    const parentClass = getParentClassForMode(selectedMode);

    return (
        <div
            className={`color-bar-outer ${parentClass}`}
            style={{ backgroundColor: color }}
        >
            <div className="color-bar-inner">
                <div className="color-bar-inner-inner">
                    <ContrastText color={color} textColor={textColor} />
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
