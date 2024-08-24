import React from 'react';
import { getParentClassForMode } from '../utils';
import ColorBarContent from './ColorBarContent';

interface ColorBarProps {
    color: string;
    selectedMode?: string;
    allColors?: string[];
    selectedContrast?: number;
    removeColorBar?: () => void;
    onColorChange?: (color: string) => void;
}

const ColorBar: React.FC<ColorBarProps> = ({
    color,
    selectedMode,
    allColors = [],
    selectedContrast,
    removeColorBar = () => {},
    onColorChange = () => {},
}): JSX.Element => {
    const parentClass = getParentClassForMode(selectedMode);

    return (
        <div
            className={`color-bar-outer ${parentClass}`}
            style={{ backgroundColor: color }}
        >
            <ColorBarContent
                removeColorBar={removeColorBar}
                onColorChange={onColorChange}
                color={color}
                selectedMode={selectedMode ?? ''}
                selectedContrast={selectedContrast}
                allColors={allColors}
            />
        </div>
    );
};

export default ColorBar;
