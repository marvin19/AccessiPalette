import React from 'react'
import SmallColorBox from './SmallColorBox';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

type ContrastBoxProps = {
    leftColor: string;
    rightColor: string;
}

const ContrastBox: React.FC<ContrastBoxProps> = ({leftColor, rightColor}) => {

    const contrastRatio = calculateContrastRatio(leftColor, rightColor);
    const meetsWCAGtext = contrastRatio >= 4.5;
    
    // TODO: Add graphic contrast ratio
    //const meetsWCAGgraphic = contrastRatio >= 3;

  return (
    <div className="contrast-box">
        <FontAwesomeIcon icon ={faArrowLeft} />
            <div className="inner-contrast-box">
                <p className="contrast-text">
                    {`Contrast Ratio: ${contrastRatio.toFixed(2)}:1 ${meetsWCAGtext ? '(passes)' : '(fails)'}`} <br />
                    between <SmallColorBox color={leftColor} /> {leftColor} and <br /> <SmallColorBox color={rightColor} /> {rightColor}
                </p>
            </div>
        <FontAwesomeIcon icon={faArrowRight} />
    </div>
  )
}

export default ContrastBox;

function calculateContrastRatio(color1: string, color2: string): number {
    const luminance1 = getLuminance(color1);
    const luminance2 = getLuminance(color2);
    return (Math.max(luminance1, luminance2) + 0.05) / (Math.min(luminance1, luminance2) + 0.05);
}

function getLuminance(color: string): number {
    const rgb = hexToRgb(color) as any;
    const a = [rgb.r, rgb.g, rgb.b].map((v) => {
        v /= 255;
        return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
    });
    return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
}

function hexToRgb(hex: string) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}

