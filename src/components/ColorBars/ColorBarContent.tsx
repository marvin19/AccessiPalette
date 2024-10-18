import ContrastText from '../Base/ContrastText';
import ColorPicker from '../Base/ColorPicker';
import ContrastBoxFull from './ContrastBoxFull';
import RemoveColorButton from '../Base/RemoveColorButton';
import useTextColor from '../../hooks/useTextColor';
import useOtherColor from '../../hooks/useOtherColor';

interface ColorBarContentProps {
    allColors: string[];
    selectedMode: string;
    selectedContrast?: number;
    color: string;
    onColorChange: (color: string) => void;
    removeColorBar: () => void;
}

const ColorBarContent = ({
    allColors,
    selectedMode,
    color,
    removeColorBar,
    onColorChange,
    selectedContrast,
}: ColorBarContentProps): JSX.Element => {
    const textColor = useTextColor(color);
    const otherColors = useOtherColor(allColors, color);
    const handleColorChange = (newColor: string): void => {
        onColorChange(newColor);
    };
    const lengthOfColors = allColors.length;

    return (
        <>
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
            {selectedMode !== 'third' && lengthOfColors > 2 && (
                <RemoveColorButton
                    removeColorBar={removeColorBar}
                    textColor={textColor}
                />
            )}
        </>
    );
};

export default ColorBarContent;
