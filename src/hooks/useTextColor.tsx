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
 * 3.0, which indicateds poor readability, it sets the text color to white
 * (`#FFFFFF`).
 *
 * If both black and white fail to meet the contrast threshold, default to black
 * and return "N/A for contrast ratio"
 *
 * @param {string} backgroundColor - The background color to check for contrast.
 * @param {number} selectedContrast - The selected contrast ratio.
 * @returns {string} The calculated text color (either black or white).
 */

// TODO: Something is not right. When changing colors in the 7 text contrast mode, it hops down to white and three to one and then hops back to seven. Might not be calculating something correct?
// Also it should automatically change whenever a selectedContrast is changed.

const useTextColor = (
    backgroundColor: string,
    selectedContrast: number,
): string => {
    const [textColor, setTextColor] = useState('#000000');
    const [contrastText, setContrastText] = useState<string | null>(null);

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
            // Change this so that it sets the textColor with the highest contrast ratio
            setTextColor(BLACK);
            setContrastText('N/A');
        }
    }, [backgroundColor, selectedContrast]);

    return [textColor, contrastText];
};

export default useTextColor;
