import { calculateContrastRatio, getWCAGLevel } from '../../utils';
import WCAGCheck from './WCAGCheck';
import SmallColorBox from './SmallColorBox';

interface ContrastBoxSmallProps {
    activeColor: string;
    otherColor: string;
    selectedContrast: number;
}

const ContrastBoxSmall = ({
    activeColor,
    otherColor,
    selectedContrast,
}: ContrastBoxSmallProps): JSX.Element => {
    const contrastRatio = calculateContrastRatio(activeColor, otherColor);
    const { level, meetsWCAG } = getWCAGLevel(contrastRatio, selectedContrast);

    return (
        <div className="contrast-ratio-container">
            <div className="contrast-ratio-box-text contrast-row">
                <WCAGCheck meetsWCAG={meetsWCAG} fontSize="1.0rem" />
                <SmallColorBox color={otherColor} />
                <p className="all-contrast-label">{`${contrastRatio.toFixed(2)}:1 (${level})`}</p>
            </div>
        </div>
    );
};

export default ContrastBoxSmall;
