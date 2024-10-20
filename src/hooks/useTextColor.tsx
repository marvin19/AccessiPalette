import { useEffect, useState } from 'react';
import { calculateContrastRatio } from '../utils';

const BLACK = '#000000';
const WHITE = '#FFFFFF';

/**
 * Custom hook that determines the appropriate text color (either black or white)
 * based on the contrast ratio with the given background color.
 *
 * The hook calculates the contrast ratio between the given background color
 * and black (`#000000` which is the default. If the contrast ratio is less than
 * 3.0, which indicates poor readability, it sets the text color to white
 * (`#FFFFFF`).
 *
 * If both black and white fail to meet the contrast threshold, default to black
 * and return "N/A for contrast ratio"
 *
 * @param {string} backgroundColor - The background color to check for contrast.
 * @param {number} selectedContrast - The selected contrast ratio.
 * @returns {[string, string]} The calculated text color (either black or white), and the contrast ratio text.
 */

const useTextColor = (
    backgroundColor: string,
    selectedContrast: number,
): [string, string] => {
    const [textColor, setTextColor] = useState<string>(BLACK);
    // TODO: Find better wording than N/A ?
    const [contrastText, setContrastText] = useState<string>('N/A');

    useEffect(() => {
        const blackContrastRatio: number = calculateContrastRatio(
            BLACK,
            backgroundColor,
        );
        const whiteContrastRatio: number = calculateContrastRatio(
            WHITE,
            backgroundColor,
        );

        if (blackContrastRatio >= selectedContrast) {
            setTextColor(BLACK);
            setContrastText(blackContrastRatio.toFixed(2));
        } else if (whiteContrastRatio >= selectedContrast) {
            setTextColor(WHITE);
            setContrastText(whiteContrastRatio.toFixed(2));
        } else {
            // Find which color has the highest ratio when selected
            // contrast cannot be fulfilled
            const highestContrastRatio = Math.max(
                blackContrastRatio,
                whiteContrastRatio,
            );
            setTextColor(
                highestContrastRatio === blackContrastRatio ? BLACK : WHITE,
            );
            setContrastText('N/A');
        }
    }, [backgroundColor, selectedContrast]);

    return [textColor, contrastText];
};

export default useTextColor;
