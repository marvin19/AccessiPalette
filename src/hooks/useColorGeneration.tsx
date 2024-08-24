import { useState } from 'react';
// import { generateAdditionalColors } from '../utils';

interface ColorGenerationResult {
    colors: string[];
    handleColorChange: (index: number, newColor: string) => void;
    addColorBar: () => void;
    removeColorBar: (index: number) => void;
}

const useColorGeneration = (): ColorGenerationResult => {
    const defaultColors = [
        '#6975ff',
        '#084fd7',
        '#64bdc6',
        '#eeca34',
        '#fe7135',
        '#fd2a2a',
    ];
    const [colors, setColors] = useState<string[]>(defaultColors);

    // TODO: Implement random colors
    const addColorBar = (): void => {
        if (colors.length < 10) {
            const randomIndex = Math.floor(
                Math.random() * defaultColors.length,
            );
            const newColor = defaultColors[randomIndex];
            setColors([...colors, newColor]);
        }
    };

    const removeColorBar = (index: number): void => {
        if (colors.length > 2) {
            setColors(colors.filter((_, i) => i !== index));
        }
    };

    const handleColorChange = (index: number, newColor: string): void => {
        const updatedColors = [...colors];
        updatedColors[index] = newColor;
        setColors(updatedColors);
    };

    return {
        colors,
        addColorBar,
        handleColorChange,
        removeColorBar,
    };
};

export default useColorGeneration;
