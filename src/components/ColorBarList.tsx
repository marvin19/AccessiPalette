import { useState } from 'react';
import ColorBar from './ColorBar';
import ContrastBoxNew from './ContrastBoxNew';

const defaultColors = [
    '#6975ff',
    '#084fd7',
    '#64bdc6',
    '#eeca34',
    '#fe7135',
    '#fd2a2a',
];

const ColorBarList = (): JSX.Element => {
    const [colorBars, setColorBars] = useState<string[]>(defaultColors);

    const addColorBar = (): void => {
        if (colorBars.length < 10) {
            const newColor = '#000000';
            setColorBars([...colorBars, newColor]);
        }
    };

    const removeColorBar = (index: number): void => {
        if (colorBars.length > 2) {
            setColorBars(colorBars.filter((_, i) => i !== index));
        }
    };

    return (
        <div className="color-bars">
            {colorBars.map((color, index) => (
                <div key={index} className="color-bar-wrapper">
                    <ColorBar
                        color={color}
                        onRemove={() => {
                            removeColorBar(index);
                        }}
                        showContrastBox={index === colorBars.length - 1}
                    />
                    {index < colorBars.length - 1 && <ContrastBoxNew />}
                </div>
            ))}
            {colorBars.length < 10 && (
                <div className="color-bar-outer add-color-bar">
                    <button
                        onClick={addColorBar}
                        className="add-color-bar-button"
                    >
                        + Add color
                    </button>
                </div>
            )}
        </div>
    );
};

export default ColorBarList;
