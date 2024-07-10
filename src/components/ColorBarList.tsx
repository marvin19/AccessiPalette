import { useState } from 'react';
import ColorBar from './ColorBar';

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
                <ColorBar
                    key={index}
                    color={color}
                    onRemove={() => {
                        removeColorBar(index);
                    }}
                />
            ))}
            {colorBars.length < 10 && (
                <button onClick={addColorBar} className="add-color-bar">
                    + Add color bar
                </button>
            )}
        </div>
    );
};

export default ColorBarList;
