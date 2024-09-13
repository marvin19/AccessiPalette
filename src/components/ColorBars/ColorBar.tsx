import { memo } from 'react';

import ColorBarContent from './ColorBarContent';

interface ColorBarProps {
    color: string;
    selectedMode?: 'all' | 'third' | 'neighbor';
    allColors?: string[];
    selectedContrast?: number;
    removeColorBar?: () => void;
    onColorChange?: (color: string) => void;
}

const ColorBar = ({
    color,
    selectedMode,
    allColors = [],
    selectedContrast,
    removeColorBar = () => {},
    onColorChange = () => {},
}: ColorBarProps): JSX.Element => {
    return (
        <div className="color-bar-outer" style={{ backgroundColor: color }}>
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

export default memo(ColorBar);
