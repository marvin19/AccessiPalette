import React from 'react';
import SmallColorBox from './SmallColorBox';
import { calculateContrastRatio } from '../utils';

const WCAG_TEXT_CONTRAST_THRESHOLD = 4.5;

interface ContrastBoxFullProps {
    activeColor: string;
    otherColors: string[];
}

const ContrastBoxFull: React.FC<ContrastBoxFullProps> = ({
    activeColor,
    otherColors,
}) => {
    const contrastRatios = otherColors.map((color) =>
        calculateContrastRatio(activeColor, color),
    );

    const meetsWCAG = contrastRatios.every(
        (ratio) => ratio >= WCAG_TEXT_CONTRAST_THRESHOLD,
    );

    return (
        <div className="contrast-box-full">
            {otherColors.map((color, index) => (
                <div className="contrast-row" key={index}>
                    <SmallColorBox color={color} />
                    <p className="all-contrast-label">
                        {color}: {contrastRatios[index].toFixed(2)}
                    </p>
                </div>
            ))}
            {/* <p>Color: {activeColor}</p>
            {meetsWCAG ? <p>Passes!</p> : <p>Fails!</p>} */}
        </div>
    );
};

export default ContrastBoxFull;
