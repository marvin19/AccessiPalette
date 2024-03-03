import { useEffect, useState } from 'react';
import { generateAdditionalColors } from '../utils';

interface ColorGenerationResult {
    colors: string[];
    visibleColors: number;
    handleColorChange: (newColors: string[]) => void;
    handleGeneratePalette: () => void;
}

const useColorGeneration = (selectedOption: number): ColorGenerationResult => {
    const [colors, setColors] = useState<string[]>([]);
    const [visibleColors, setVisibleColors] = useState<number>(0);

    const handleColorChange = (newColors: string[]): void => {
        setColors(newColors);
    };

    const handleGeneratePalette = (): void => {
        const newColors = generateAdditionalColors(visibleColors);
        setColors(newColors);
    };

    const updateVisibleColors = (newVisibleColors: number): void => {
        if (newVisibleColors < 2) {
            // eslint-disable-next-line no-console
            console.error('visibleColors cannot be less than 2 ');
            return;
        }
        setVisibleColors(newVisibleColors);
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

    return {
        colors,
        visibleColors,
        handleColorChange,
        handleGeneratePalette,
    };
};

export default useColorGeneration;
