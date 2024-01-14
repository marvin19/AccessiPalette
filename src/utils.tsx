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
export const renderColorAndContrastBoxes = (colors: string[], visibleColors: number): JSX.Element => {
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
				/>
			);
		}
	}
	return elements;
  }