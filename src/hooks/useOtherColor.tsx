import { useMemo } from 'react';

/**
 * Custom hook that returns an array of colors excluding the current color.
 *
 * This hook filters out the provided `currentColor` from the `allColors` array.
 * It uses `useMemo` to memoize the filtered array, ensuring that the computation
 * only occurs when `allColors` or `currentColor` change, to optimize performance.
 *
 * @param {string[]} allColors - An array of all color strings.
 * @param {string} currentColor  - The color string that should be excluded from the returned array.
 * @returns {string[]} an array of colors excluding the current color.
 */

const useOthercolors = (
    allColors: string[],
    currentColor: string,
): string[] => {
    return useMemo(
        () => allColors.filter((color) => color !== currentColor),
        [allColors, currentColor],
    );
};

export default useOthercolors;
