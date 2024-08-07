import React, { useState } from 'react';
import ColorBar from './ColorBar';
import useContrastColor from '../hooks/useContrastColor';

const defaultColors = ['#6975ff', '#084fd7'];

interface ThirdColorProps {
    onColorChange?: (colors: string[]) => void;
    selectedContrast: number;
}

const ThirdColor: React.FC<ThirdColorProps> = ({
    onColorChange,
    selectedContrast,
}) => {
    const [colors, setColors] = useState<string[]>(defaultColors);
    const [buttonClicked, setButtonClicked] = useState<boolean>(false);

    const handleColorChange = (index: number, newColor: string): void => {
        const newColors = [...colors];
        newColors[index] = newColor;
        setColors(newColors);
        onColorChange?.(newColors);
    };

    const contrastColor = useContrastColor(colors, selectedContrast);

    const addColorBar = (): void => {
        setButtonClicked(true);
    };

    return (
        <div className="color-bars">
            <div className="color-bar-container">
                <ColorBar
                    color={colors[0]}
                    onColorChange={(newColor) => {
                        handleColorChange(0, newColor);
                    }}
                    onRemove={() => {}}
                    allColors={colors}
                />
            </div>
            <div className="color-bar-container">
                <div className="color-bar-outer add-color-bar">
                    {buttonClicked ? (
                        contrastColor !== null ? (
                            <ColorBar
                                color={contrastColor}
                                onColorChange={(newColor) => {
                                    // Handle the change for the contrast color if needed
                                }}
                                onRemove={() => {
                                    // Handle the removal of the contrast color if needed
                                }}
                                allColors={[...colors, contrastColor]}
                            />
                        ) : (
                            //<p>Contrast Color: {contrastColor}</p>
                            <p>
                                No colors available with enough contrast. Adjust
                                color input.
                            </p>
                        )
                    ) : (
                        <button
                            onClick={addColorBar}
                            className="add-color-bar-button"
                        >
                            + Find contrast color
                        </button>
                    )}
                </div>
            </div>
            <div className="color-bar-container">
                <ColorBar
                    color={colors[1]}
                    onColorChange={(newColor) => {
                        handleColorChange(1, newColor);
                    }}
                    onRemove={() => {}}
                    allColors={colors}
                />
            </div>
        </div>
    );
};

export default ThirdColor;
