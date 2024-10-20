import { calculateContrastRatio, getWCAGLevel } from '../../utils';
import WCAGCheck from '../ColorBars/WCAGCheck';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight, faCaretLeft } from '@fortawesome/free-solid-svg-icons';
interface ContrastBoxProps {
    leftColor: string;
    rightColor: string;
    selectedContrast: number;
}

const ContrastBox = ({
    leftColor,
    rightColor,
    selectedContrast,
}: ContrastBoxProps): JSX.Element => {
    const contrastRatio = calculateContrastRatio(leftColor, rightColor);
    const { meetsWCAG, level } = getWCAGLevel(contrastRatio, selectedContrast);

    return (
        <div className="checker">
            <div className="contrast-ratio-box-text">
                <FontAwesomeIcon
                    icon={faCaretLeft}
                    style={{ color: '#000000' }}
                />
                <WCAGCheck meetsWCAG={meetsWCAG} fontSize="1.0rem" />
                <p> {`${contrastRatio.toFixed(2)}:1(${level})`}</p>
                <FontAwesomeIcon
                    icon={faCaretRight}
                    style={{ color: '#000000' }}
                />
            </div>
        </div>
    );
};

export default ContrastBox;
