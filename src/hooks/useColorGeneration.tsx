import { useState, useCallback, useMemo } from 'react';
import { generateNewRandomColor } from '../utils';

interface ColorGenerationResult {
    colors: string[];
    handleColorChange: (index: number, newColor: string) => void;
    addColorBar: () => void;
    removeColorBar: (index: number) => void;
    setColorBars: (newColors: string[]) => void;
}

const MAX_COLOR_BARS = 20;
const MIN_COLOR_BARS = 2;

const useColorGeneration = (): ColorGenerationResult => {
    const defaultColors = useMemo(
        () => [
            '#6975ff',
            '#084fd7',
            '#64bdc6',
            '#eeca34',
            '#fe7135',
            '#fd2a2a',
        ],
        [],
    );

    const [colors, setColors] = useState<string[]>(defaultColors);

    const addColorBar = useCallback((): void => {
        if (colors.length < MAX_COLOR_BARS) {
            const newColor = generateNewRandomColor();
            setColors((prevColors) => [...prevColors, newColor]);
        }
    }, [colors.length]);

    const removeColorBar = useCallback(
        (index: number): void => {
            if (colors.length > MIN_COLOR_BARS) {
                setColors((prevColors) =>
                    prevColors.filter((_, i) => i !== index),
                );
            }
        },
        [colors.length],
    );

    const handleColorChange = useCallback(
        (index: number, newColor: string): void => {
            setColors((prevColors) => {
                if (index >= 0 && index < prevColors.length) {
                    const updatedColors = [...prevColors];
                    updatedColors[index] = newColor;
                    return updatedColors;
                }
                return prevColors;
            });
        },
        [],
    );

    const setColorBars = useCallback((newColors: string[]): void => {
        setColors(newColors);
    }, []);

    return {
        colors,
        addColorBar,
        handleColorChange,
        removeColorBar,
        setColorBars,
    };
};

export default useColorGeneration;
