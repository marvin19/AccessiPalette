import { useEffect, useState } from 'react';
import { generateAdditionalColors } from '../utils';

interface ColorGenerationResult {
    colors: string[];
    visibleColors: number;
    setColors: (colors: string[]) => void;
}

const useColorGeneration = (selectedOption: number): ColorGenerationResult => {
    const [colors, setColors] = useState<string[]>([]);
    const [visibleColors, setVisibleColors] = useState<number>(0);

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

    return { colors, visibleColors, setColors };
};

export default useColorGeneration;
