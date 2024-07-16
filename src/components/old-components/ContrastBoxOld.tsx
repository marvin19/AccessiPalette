import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { calculateContrastRatio } from '../../utils';
import WCAGCheck from '../WCAGCheck';

interface ContrastBoxProps {
    leftColor: string;
    rightColor: string;
    selectedContrast: number;
    paletteType: string;
}

const WCAG_TEXT_CONTRAST_THRESHOLD = 4.5;
const WCAG_GRAPHIC_CONTRAST_THRESHOLD = 3;

const ContrastBoxOld: React.FC<ContrastBoxProps> = ({
    leftColor,
    rightColor,
    selectedContrast,
}) => {
    let meetsWCAG: boolean = false;

    const contrastRatio = calculateContrastRatio(leftColor, rightColor);

    if (selectedContrast === WCAG_TEXT_CONTRAST_THRESHOLD) {
        meetsWCAG = contrastRatio >= WCAG_TEXT_CONTRAST_THRESHOLD;
    } else if (selectedContrast === WCAG_GRAPHIC_CONTRAST_THRESHOLD) {
        meetsWCAG = contrastRatio >= WCAG_GRAPHIC_CONTRAST_THRESHOLD;
    }

    return (
        <div className="contrast-box">
            <FontAwesomeIcon icon={faArrowLeft} />
            <div
                className={`inner-contrast-box ${meetsWCAG ? 'passes-border' : 'fails-border'}`}
            >
                <p className="contrast-text">
                    <b>Contrast Ratio</b>
                </p>
                <p className="contrast-text contrast-ratio">
                    {`${contrastRatio.toFixed(2)}:1`}
                </p>
                <WCAGCheck meetsWCAG={meetsWCAG} fontSize="1.0rem" />
            </div>
            <FontAwesomeIcon icon={faArrowRight} />
        </div>
    );
};

export default ContrastBoxOld;
