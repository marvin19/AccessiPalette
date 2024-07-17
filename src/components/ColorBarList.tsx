import { useState, Fragment } from 'react';
import ColorBar from './ColorBar';

const defaultColors = [
    '#6975ff',
    '#084fd7',
    '#64bdc6',
    '#eeca34',
    '#fe7135',
    '#fd2a2a',
];

interface ColorBarListProps {
    selectedContrast: number;
    selectedMode: string;
    renderModeSpecificContent: (
        index: number,
        colorBars: string[],
    ) => JSX.Element | null;
}

const ColorBarList = ({
    selectedMode,
    renderModeSpecificContent,
}: ColorBarListProps): JSX.Element => {
    const [colorBars, setColorBars] = useState<string[]>(defaultColors);

    const addColorBar = (): void => {
        if (colorBars.length < 10) {
            const randomIndex = Math.floor(
                Math.random() * defaultColors.length,
            );
            const newColor = defaultColors[randomIndex];
            setColorBars([...colorBars, newColor]);
        }
    };

    const removeColorBar = (index: number): void => {
        if (colorBars.length > 2) {
            setColorBars(colorBars.filter((_, i) => i !== index));
        }
    };

    const handleColorChange = (index: number, newColor: string): void => {
        const updatedColors = [...colorBars];
        updatedColors[index] = newColor;
        setColorBars(updatedColors);
    };

    return (
        <div className="color-bars">
            {colorBars.map((color, index) => (
                <Fragment key={`${selectedMode}-${index}-${color}`}>
                    <div className="color-bar-container">
                        <ColorBar
                            color={color}
                            onColorChange={(newColor) => {
                                handleColorChange(index, newColor);
                            }}
                            onRemove={() => {
                                removeColorBar(index);
                            }}
                        />
                        {renderModeSpecificContent(index, colorBars)}
                    </div>
                </Fragment>
            ))}
            {colorBars.length < 10 && (
                <div className="color-bar-container">
                    <div className="color-bar-outer add-color-bar">
                        <button
                            onClick={addColorBar}
                            className="add-color-bar-button"
                        >
                            + Add color
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ColorBarList;
