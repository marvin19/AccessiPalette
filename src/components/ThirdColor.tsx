import React, { useState } from 'react';
import ColorBar from './ColorBar';
import ContrastBox from './ContrastBox';
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
                    removeColorBar={() => {}}
                    allColors={colors}
                />
                {buttonClicked && contrastColor !== null && (
                    <ContrastBox
                        leftColor={colors[0]}
                        rightColor={contrastColor}
                        selectedContrast={selectedContrast}
                    />
                )}
            </div>
            <div className="color-bar-container">
                {buttonClicked ? (
                    contrastColor !== null ? (
                        <>
                            <ColorBar
                                color={contrastColor}
                                removeColorBar={() => {}}
                                allColors={[...colors, contrastColor]}
                            />
                            <ContrastBox
                                leftColor={contrastColor}
                                rightColor={colors[1]}
                                selectedContrast={selectedContrast}
                            />
                        </>
                    ) : (
                        <div className="color-bar-outer no-button">
                            <p className="no-colors">
                                No colors available with enough contrast. Adjust
                                color input.
                            </p>
                        </div>
                    )
                ) : (
                    <div className="color-bar-outer add-color-bar">
                        <button
                            id="find-button"
                            onClick={addColorBar}
                            className="add-color-bar-button"
                        >
                            + Find contrast color
                        </button>
                    </div>
                )}
            </div>

            {/* Last ColorBar */}
            <div className="color-bar-container">
                <ColorBar
                    color={colors[1]}
                    onColorChange={(newColor) => {
                        handleColorChange(1, newColor);
                    }}
                    removeColorBar={() => {}}
                    allColors={colors}
                />
            </div>
        </div>
    );
};

export default ThirdColor;
