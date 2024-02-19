import ColorBox from './ColorBox';
import ContrastBox from './ContrastBox';

export const getRgb = (): number => {
    return Math.floor(Math.random() * 256);
};

export const rgbToHex = (r: number, g: number, b: number): string => {
    return (
        '#' +
        [r, g, b]
            .map((x) => {
                const hex = x.toString(16);
                return hex.length === 1 ? '0' + hex : hex;
            })
            .join('')
    );
};

// Generate an array of random colors at a given length
export const generateAdditionalColors = (count: number): string[] => {
    return Array.from({ length: count }, () => {
        return rgbToHex(getRgb(), getRgb(), getRgb());
    });
};

// Render color and contrast boxes together
export const renderColorAndContrastBoxes = (
    colors: string[],
    visibleColors: number,
    selectedContrast: number,
    paletteType: string,
): JSX.Element[] => {
    const elements: JSX.Element[] = [];
    for (let i = 0; i < visibleColors; i++) {
        elements.push(<ColorBox key={`color-${i}`} color={colors[i]} />);

        // Add ContrastBox between ColorBoxes if there is a next Color
        if (i < visibleColors - 1) {
            elements.push(
                <ContrastBox
                    key={`contrast-${i}`}
                    leftColor={colors[i]}
                    rightColor={colors[i + 1]}
                    selectedContrast={selectedContrast}
                    paletteType={paletteType}
                />,
            );
        }
    }
    return elements;
};

// Color coming in as hex
export const calculateContrastRatio = (
    color1: string,
    color2: string,
): number => {
    const luminance1 = getLuminance(color1);
    const luminance2 = getLuminance(color2);

    // Formula for calculating luminance (L1 + 0.05) / (L2 + 0.05)
    // +0.05 is added to prevent division by zero
    // Math.max and Math.min are to ensure that L1 is the luminance of the lighter color and LS is the luminance of the darker color
    return (
        (Math.max(luminance1, luminance2) + 0.05) /
        (Math.min(luminance1, luminance2) + 0.05)
    );
};

// color coming in as hex
export const getLuminance = (color: string): number => {
    // Transforming hex to Rgb
    const rgb = hexToRgb(color);

    // calculating relative luminance from rgb values
    const a = [rgb.r, rgb.g, rgb.b].map((v) => {
        // Dividing the value by 255 to normalize it to a range of 0 to 1
        v /= 255;
        // Applying a piecewise gamma correction.
        // If value is less than or equal to 0.03928, divide by 12.92.
        // Otherwise, add 0.055 and raise to the power of 2.4
        return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
    });
    // calculating relative luminance as a number. The relative luminance can range from 0 (black) to 1 (white)
    return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
};

export const hexToRgb = (hex: string): any => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result !== null
        ? {
              r: parseInt(result[1], 16),
              g: parseInt(result[2], 16),
              b: parseInt(result[3], 16),
          }
        : null;
};

export const validateColorInput = (value: string): string | null => {
    if (value.length > 7) {
        return 'Input cannot exceed 7 characters.';
    }

    if (value.split('#').length > 2) {
        return 'Input cannot contain more than one hash symbol.';
    }

    return null;
};

export const formatColorInput = (value: string): string => {
    if (value !== '' && value[0] !== '#') {
        return '#' + value;
    }
    return value;
};
