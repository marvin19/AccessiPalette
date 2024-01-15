import ColorBox from './ColorBox';
import ContrastBox from './ContrastBox';

export const getRgb = () => Math.floor(Math.random() * 256);

export const rgbToHex = (r: number, g: number, b: number): string => {
    return '#' + [r, g, b].map(x => {
      const hex = x.toString(16);
      return hex.length === 1 ? '0' + hex : hex;
    }).join('');
}

export const generateAdditionalColors = (count: number): string[] => {
    return Array.from({ length: count }, () => rgbToHex(getRgb(), getRgb(), getRgb()));
}

// Render color and contrast boxes together
export const renderColorAndContrastBoxes = (colors: string[], visibleColors: number, selectedContrast: number, paletteType: string): JSX.Element => {
	const elements: JSX.Element[] = [];
	for (let i = 0; i < visibleColors; i++){
		elements.push(<ColorBox key={`color-${i}`} color={colors[i]} />);

		// Add ContrastBox between ColorBoxes if there is a next Color
		if(i < visibleColors - 1){
			elements.push(
				<ContrastBox
					key={`contrast-${i}`}
					leftColor={colors[i]}
					rightColor={colors[i + 1]}
                    selectedContrast={selectedContrast}
                    paletteType={paletteType}
				/>
			);
		}
	}
	return elements;
  }

export const calculateContrastRatio = (color1: string, color2: string): number => {
    const luminance1 = getLuminance(color1);
    const luminance2 = getLuminance(color2);
    return (Math.max(luminance1, luminance2) + 0.05) / (Math.min(luminance1, luminance2) + 0.05);
};

export const getLuminance = (color: string): number =>  {
    const rgb = hexToRgb(color) as any;
    const a = [rgb.r, rgb.g, rgb.b].map((v) => {
        v /= 255;
        return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
    });
    return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
};

export const hexToRgb = (hex: string): any => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}