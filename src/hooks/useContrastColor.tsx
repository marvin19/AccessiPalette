import { useState, useEffect } from 'react';
import { generateThirdContrastColor } from '../utils';

/**
 *
 * Custom hooks that generates and returns a contrast color based on an array of colors
 * and a selected contrast value.
 *
 * This hook utilizes the `generateThirdContrastColor` utility function to compute a new
 * color that has the specified contrast ratio with the provided colors array. The color
 * is recalculated whenever the `colors` array or `selectedContrast` value changes
 *
 * @param {string[] } colors - An array of color strings to be used in contrast calculations.
 * @param {number} selectedContrast - The contrast ratio to be used for generating the third color.
 * @returns {string | null} contrastColor - The generated contrast color, or `null` if no color is generated.
 */

const useContrastColor = (
    colors: string[],
    selectedContrast: number,
): string | null => {
    const [contrastColor, setContrastColor] = useState<string | null>(null);

    useEffect(() => {
        const newColor = generateThirdContrastColor(colors, selectedContrast);
        setContrastColor(newColor);
    }, [colors, selectedContrast]);

    return contrastColor;
};

export default useContrastColor;
