import React from 'react';
import { calculateContrastRatio } from '../utils';
import WCAGCheck from './WCAGCheck';
import SmallColorBox from './SmallColorBox';
import useOtherColor from '../hooks/useOtherColor';

interface ContrastBoxFullProps {
    activeColor: string;
    otherColors: string[];
    selectedContrast: number;
}

const WCAG_TRIPLE_AA_TEXT_CONTRAST_THRESHOLD = 7;
const WCAG_TEXT_CONTRAST_THRESHOLD = 4.5;
const WCAG_GRAPHIC_CONTRAST_THRESHOLD = 3;

const ContrastBoxFull: React.FC<ContrastBoxFullProps> = ({
    activeColor,
    otherColors,
    selectedContrast,
}): JSX.Element => {
    let level = '',
        meetsWCAG = false;

    const filteredColors = useOtherColor(otherColors, activeColor);
    const uniqueOtherColors = Array.from(new Set(filteredColors));

    return (
        <div className="contrast-box-full">
            {uniqueOtherColors.map((otherColor, index) => {
                const contrastRatio = calculateContrastRatio(
                    activeColor,
                    otherColor,
                );

                if (selectedContrast === WCAG_TEXT_CONTRAST_THRESHOLD) {
                    meetsWCAG = contrastRatio >= WCAG_TEXT_CONTRAST_THRESHOLD;
                    level = 'AA';
                } else if (
                    selectedContrast === WCAG_GRAPHIC_CONTRAST_THRESHOLD
                ) {
                    meetsWCAG =
                        contrastRatio >= WCAG_GRAPHIC_CONTRAST_THRESHOLD;
                    level = 'A';
                } else if (
                    selectedContrast === WCAG_TRIPLE_AA_TEXT_CONTRAST_THRESHOLD
                ) {
                    meetsWCAG =
                        contrastRatio >= WCAG_TRIPLE_AA_TEXT_CONTRAST_THRESHOLD;
                    level = 'AAA';
                }
                return (
                    <div key={index} className="contrast-ratio-container">
                        <div className="contrast-ratio-box-text contrast-row">
                            <WCAGCheck
                                meetsWCAG={meetsWCAG}
                                fontSize="1.0rem"
                            />
                            <SmallColorBox color={otherColor} />
                            <p className="all-contrast-label">{`${contrastRatio.toFixed(2)}:1 (${level})`}</p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default ContrastBoxFull;
