import { useState, Fragment } from 'react';
import ColorBar from './ColorBar';
import ContrastBox from './ContrastBox';

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
                <Fragment key={index}>
                    <div className="color-bar-container">
                        <ColorBar
                            color={color}
                            onRemove={() => {
                                removeColorBar(index);
                            }}
                        />
                        {index < colorBars.length - 1 && (
                            <ContrastBox
                                leftColor={colorBars[index]}
                                rightColor={colorBars[index + 1]}
                                selectedContrast={3.0}
                            />
                        )}
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
