import React, { useState, useEffect } from 'react';
import AdjacentPalette from './AdjacentPalette';
import ColorSelect from './ColorSelect';
import ContrastSelect from './ContrastSelect';
import ColorPickerList from './ColorPickerList';
import { generateAdditionalColors } from '../utils';
import FullAccessiblePalette from './FullAccessisblePalette';
import RadioButtonList from './RadioButtonList';
import SectionTitle from './SectionTitle';
import FindColor from './FindColor';

const CardGrid: React.FC = () => {
    // You need to have two colors to check contrast
    const [selectedOption, setSelectedOption] = useState(2);
    const [selectedContrast, setSelectedContrast] = useState(4.5);
    const [colors, setColors] = useState<string[]>([]);
    const [visibleColors, setVisibleColors] = useState<number>(0);
    const [paletteType, setPaletteType] = useState('Adjacent');
    const [checkboxChecked, setCheckboxChecked] = useState(false);

    // TODO: Check if this can be done in state management
    const updateVisibleColors = (newVisibleColors: number): void => {
        if (newVisibleColors < 2) {
            // eslint-disable-next-line no-console
            console.error('visibleColors cannot be less than 2 ');
            return;
        }
        setVisibleColors(newVisibleColors);
    };
    const handleColorChange = (newColors: string[]): void => {
        setColors(newColors);
    };

    const handleGeneratePalette = (): void => {
        const newColors = generateAdditionalColors(visibleColors);
        setColors(newColors);
    };

    useEffect(() => {
        if (selectedOption > colors.length) {
            // If selectedOption increases, generate new colors for the additional color pickers
            const additionalColors = generateAdditionalColors(
                selectedOption - colors.length,
            );
            setColors((prevColors) => [...prevColors, ...additionalColors]);
        }
        updateVisibleColors(selectedOption);
    }, [colors.length, selectedOption]);

    return (
        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex flex-col bg-white shadow rounded-lg p-4 border-2 border-gray-200">
                    <h2>Palette Type</h2>
                    <div className="copy">
                        <p>Choose the type of color palette to generate.</p>
                        <br />
                        <p>
                            The{' '}
                            <span className="product-style">
                                Adjacent Color Palette
                            </span>{' '}
                            focuses on contrast between neighboring colors,
                            ideal for visualizations where colors are used side
                            by side.
                        </p>
                        <p>
                            The{' '}
                            <span className="product-style">
                                Full Accessible Color Palette
                            </span>{' '}
                            checks contrast accross all color combinations,
                            ensuring accessibility and readability in more
                            complex color schemes.
                        </p>
                        <p>
                            Your selection will dynamically update the palette
                            displayed below.
                        </p>
                    </div>
                    <RadioButtonList
                        paletteType={paletteType}
                        setPaletteType={setPaletteType}
                    />
                </div>
                <div className="flex flex-col bg-white shadow rounded-lg p-4 border-2 border-gray-200">
                    <SectionTitle title="How many colors?" />
                    <ColorSelect
                        selectedOption={selectedOption}
                        setSelectedOption={setSelectedOption}
                    />
                    <SectionTitle title="Contrast Ratio" />
                    <ContrastSelect
                        selectedContrast={selectedContrast}
                        setSelectedContrast={setSelectedContrast}
                    />
                </div>
                <div className="flex flex-col bg-white shadow rounded-lg p-4 border-2 border-gray-200">
                    <SectionTitle title="Which colors:" />
                    <p className="copy">
                        In this section you can input your color with HEX or you
                        can open the color input to select a color or tweak the
                        colors. You can also drag and drop the colors in the
                        stack to change the order (and contrast).
                    </p>
                    <div>
                        <input
                            className="mr-2"
                            id="checkbox-show-button"
                            type="checkbox"
                            checked={checkboxChecked}
                            onChange={(e) => {
                                setCheckboxChecked(e.target.checked);
                            }}
                        />
                        <label htmlFor="checkbox-show-button">
                            I want to be able to change the order of the colors
                        </label>
                    </div>
                    <ColorPickerList
                        colors={colors}
                        handleColorChange={handleColorChange}
                        visibleColors={visibleColors}
                        checked={checkboxChecked}
                    />
                    <SectionTitle title="Random colors?" />
                    <div className="text-center">
                        <button
                            className="bg-blue-700 text-white px-4 py-2 my-3 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
                            onClick={handleGeneratePalette}
                        >
                            Generate random colors
                        </button>
                        <button
                            className="bg-blue-700 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
                            onClick={handleGeneratePalette}
                        >
                            Generate colors with contrast
                        </button>
                    </div>
                </div>
                <div className="md:col-span-3 lg:col-start-1 lg:row-start-2 flex flex-col bg-white shadow rounded-lg p-4 border-2 border-gray-200">
                    {paletteType === 'Adjacent' ? (
                        <AdjacentPalette
                            colors={colors}
                            selectedContrast={selectedContrast}
                            visibleColors={visibleColors}
                            paletteType={'Adjacent'}
                        />
                    ) : paletteType === 'FullAccessible' ? (
                        <FullAccessiblePalette
                            colors={colors}
                            selectedContrast={selectedContrast}
                            visibleColors={visibleColors}
                            paletteType={'FullAccessible'}
                        />
                    ) : (
                        <FindColor
                            colors={colors}
                            selectedContrast={selectedContrast}
                            visibleColors={visibleColors}
                            paletteType={'FindColor'}
                        />
                    )}
                </div>
            </div>
        </div>
    );
};

export default CardGrid;