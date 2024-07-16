import { calculateContrastRatio } from '../utils';
import WCAGCheck from './WCAGCheck';

interface ContrastBoxNewProps {
    leftColor: string;
    rightColor: string;
    selectedContrast: number;
}
const WCAG_TRIPLE_AA_TEXT_CONTRAST_THRESHOLD = 7;
const WCAG_TEXT_CONTRAST_THRESHOLD = 4.5;
const WCAG_GRAPHIC_CONTRAST_THRESHOLD = 3;

const ContrastBox: React.FC<ContrastBoxNewProps> = ({
    leftColor,
    rightColor,
    selectedContrast,
}): JSX.Element => {
    let meetsWCAG: boolean = false;
    let level: string = '';

    const contrastRatio = calculateContrastRatio(leftColor, rightColor);

    if (selectedContrast === WCAG_TEXT_CONTRAST_THRESHOLD) {
        meetsWCAG = contrastRatio >= WCAG_TEXT_CONTRAST_THRESHOLD;
        level = 'AA';
    } else if (selectedContrast === WCAG_GRAPHIC_CONTRAST_THRESHOLD) {
        meetsWCAG = contrastRatio >= WCAG_GRAPHIC_CONTRAST_THRESHOLD;
        level = 'A';
    } else if (selectedContrast === WCAG_TRIPLE_AA_TEXT_CONTRAST_THRESHOLD) {
        meetsWCAG = contrastRatio >= WCAG_TRIPLE_AA_TEXT_CONTRAST_THRESHOLD;
        level = 'AAA';
    }

    return (
        <div className="checker">
            <div className="contrast-ratio-box-text">
                <WCAGCheck meetsWCAG={meetsWCAG} fontSize="1.0rem" />
                <p> {`${contrastRatio.toFixed(2)}:1(${level})`}</p>
            </div>
        </div>
    );
};

export default ContrastBox;
