import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faArrowRight,
    faArrowLeft,
    faCheckCircle,
    faTimesCircle,
} from '@fortawesome/free-solid-svg-icons';
import { calculateContrastRatio } from '../utils';

interface ContrastBoxProps {
    leftColor: string;
    rightColor: string;
    selectedContrast: number;
    paletteType: string;
}

const WCAG_TEXT_CONTRAST_THRESHOLD = 4.5;
const WCAG_GRAPHIC_CONTRAST_THRESHOLD = 3; // TODO: Add graphic contrast ratio

const ContrastBox: React.FC<ContrastBoxProps> = ({
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
                <div className="check-text">
                    {meetsWCAG ? (
                        <p className="passes">
                            <FontAwesomeIcon
                                icon={faCheckCircle}
                                style={{ color: '#0f8548' }}
                            />
                            <b> Passes</b>
                        </p>
                    ) : (
                        <p className="fails">
                            <FontAwesomeIcon
                                icon={faTimesCircle}
                                style={{ color: '#b51717' }}
                            />
                            <b> Fails</b>
                        </p>
                    )}
                </div>
            </div>
            <FontAwesomeIcon icon={faArrowRight} />
        </div>
    );
};

export default ContrastBox;
