import {
    hexToRgb,
    rgbToHex,
    getRgb,
    renderColorAndContrastBoxes,
    calculateContrastRatio,
    getLuminance,
    validateColorInput,
    formatColorInput,
} from '../src/utils';

/**
 * To check for 4.5 color contrast use the following:
 * whiteHex on blueHex
 *
 * To check for breaking 4.5 but passing 3:1 color contrast use the following:
 * pinkHex on blackHex
 *
 * To check for BREAKING 3:1 color contrast use following combo:
 * blackHex on blueHex
 */

const WHITE_HEX = '#ffffff',
    BLACK_HEX = '#000000',
    BLUE_HEX = '#3143c9',
    PINK_HEX = '#c9317a',
    CONTRAST_RATIO_45 = 4.5,
    CONTRAST_RATIO_3 = 3,
    LUMINANCE_PINK = 0.1601927339593803,
    LUMINANCE_BLUE = 0.08884323599285049;

describe('convert hex to rgb', () => {
    test('should correctly convert #000000 and #ffffff', () => {
        expect(hexToRgb(BLACK_HEX)).toEqual({ r: 0, g: 0, b: 0 });
        expect(hexToRgb(WHITE_HEX)).toEqual({ r: 255, g: 255, b: 255 });
    });
});

describe('convert rgb to hex', () => {
    test('should correctly convert rgb(0, 0, 0) and rgb(255, 255, 255)', () => {
        expect(rgbToHex(0, 0, 0)).toBe('#000000');
        expect(rgbToHex(255, 255, 255)).toBe('#ffffff');
    });
});

describe('get random rgb value', () => {
    test('should return a number between 0 and 255', () => {
        expect(getRgb()).toBeGreaterThanOrEqual(0);
        expect(getRgb()).toBeLessThanOrEqual(255);
    });
});

describe('render colors and contrast boxes', () => {
    test('should render 3 color boxes and 2 contrast boxes', () => {
        const colors = [BLACK_HEX, WHITE_HEX, BLUE_HEX];
        const visibleColors = 3;
        const selectedContrast = CONTRAST_RATIO_45;
        const paletteType = 'adjacent';
        const elements = renderColorAndContrastBoxes(
            colors,
            visibleColors,
            selectedContrast,
            paletteType,
        );
        expect(elements).toHaveLength(5);
    });

    test('should render 2 color boxes and 1 contrast box', () => {
        const colors = [BLACK_HEX, WHITE_HEX];
        const visibleColors = 2;
        const selectedContrast = CONTRAST_RATIO_3;
        const paletteType = 'adjacent';
        const elements = renderColorAndContrastBoxes(
            colors,
            visibleColors,
            selectedContrast,
            paletteType,
        );
        expect(elements).toHaveLength(3);
    });
});

describe('calculate contrast ratio', () => {
    test('should return 21 for black on white', () => {
        expect(calculateContrastRatio(BLACK_HEX, WHITE_HEX)).toBe(21);
    });

    test('should return a number bigger than 4.5 for white on blue', () => {
        expect(calculateContrastRatio(WHITE_HEX, BLUE_HEX)).toBeGreaterThan(
            4.5,
        );
    });

    test('should return a number below 4.5, but above 3', () => {
        expect(calculateContrastRatio(PINK_HEX, BLACK_HEX)).toBeLessThan(4.5);
        expect(calculateContrastRatio(PINK_HEX, BLACK_HEX)).toBeGreaterThan(3);
    });

    test('should return 3 for blue on black', () => {
        expect(calculateContrastRatio(BLUE_HEX, BLACK_HEX)).toBeLessThan(3);
    });
});

describe('calculate luminance', () => {
    test('should return 0.1633 for a specific pink', () => {
        expect(getLuminance(PINK_HEX)).toBe(LUMINANCE_PINK);
    });

    test('should return 0.0722 for specific blue', () => {
        expect(getLuminance(BLUE_HEX)).toBe(LUMINANCE_BLUE);
    });
});

describe('validateColorInput', () => {
    test('should return error message when input length exceeds 7', () => {
        const input = '#1234567';
        const result = validateColorInput(input);
        expect(result).toBe('Input cannot exceed 7 characters.');
    });

    test('should return error message when input contains more than one hash symbol', () => {
        const input = '#123#45';
        const result = validateColorInput(input);
        expect(result).toBe('Input cannot contain more than one hash symbol.');
    });

    test('should return null when input is valid', () => {
        const input = '#123456';
        const result = validateColorInput(input);
        expect(result).toBeNull();
    });
});

describe('formatColorInput', () => {
    test('if user does not type a hash symbol, it should be added', () => {
        const input = '123456';
        const result = formatColorInput(input);
        expect(result).toBe('#123456');
    });
});
