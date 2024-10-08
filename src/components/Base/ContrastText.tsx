import { calculateContrastRatio } from '../../utils';

interface ContrastTextProps {
    color: string;
    textColor: string;
}

const ContrastText = ({ color, textColor }: ContrastTextProps): JSX.Element => {
    const textContrastRatio = calculateContrastRatio(textColor, color);

    return (
        <div className="contrast-text-container">
            <p className="contrast-text" style={{ color: textColor }}>
                {textContrastRatio.toFixed(2)}:1
            </p>
            <p className="contrast-text-label" style={{ color: textColor }}>
                Text Contrast Ratio
            </p>
        </div>
    );
};

export default ContrastText;
