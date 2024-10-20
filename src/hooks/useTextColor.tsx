import { useEffect, useState } from 'react';
import { calculateContrastRatio } from '../utils';

const BLACK = '#000000';
const WHITE = '#FFFFFF';

/**
 * Custom hook that determines the appropriate text color (either black or white)
 * based on the contrast ratio with the given background color.
 *
 * The hook calculates the contrast ratio between the given background color
 * and black (`#000000`). If the contrast ratio is less than 3.0,
 * which indicateds poor readability, it sets the text color to white (`#FFFFFF`).
 * Otherwise, it keeps the text color as black.
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

    useEffect(() => {
        const textContrastRatio = calculateContrastRatio(
            '#000000',
            backgroundColor,
        );
        setTextColor(textContrastRatio < selectedContrast ? WHITE : BLACK);
    }, [backgroundColor, selectedContrast]);

    return textColor;
};

export default useTextColor;
