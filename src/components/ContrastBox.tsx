import { calculateContrastRatio } from '../utils';
import WCAGCheck from './WCAGCheck';

interface ContrastBoxNewProps {
    leftColor: string;
    rightColor: string;
    selectedContrast: number;
}

const WCAG_TEXT_CONTRAST_THRESHOLD = 4.5;
const WCAG_GRAPHIC_CONTRAST_THRESHOLD = 3;

const ContrastBox: React.FC<ContrastBoxNewProps> = ({
    leftColor,
    rightColor,
    selectedContrast,
}): JSX.Element => {
    let meetsWCAG: boolean = false;

    const contrastRatio = calculateContrastRatio(leftColor, rightColor);

    if (selectedContrast === WCAG_TEXT_CONTRAST_THRESHOLD) {
        meetsWCAG = contrastRatio >= WCAG_TEXT_CONTRAST_THRESHOLD;
    } else if (selectedContrast === WCAG_GRAPHIC_CONTRAST_THRESHOLD) {
        meetsWCAG = contrastRatio >= WCAG_GRAPHIC_CONTRAST_THRESHOLD;
    }

    return (
        <div className="checker">
            <p className="contrast-text contrast-ratio">
                {`${contrastRatio.toFixed(2)}:1`}
            </p>
            <WCAGCheck meetsWCAG={meetsWCAG} fontSize="1.0rem" />
        </div>
    );
};

export default ContrastBox;
