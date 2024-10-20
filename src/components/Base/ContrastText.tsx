import { getWCAGLevel } from '../../utils';
interface ContrastTextProps {
    textColor: string;
    textContrastRatio: number;
    selectedContrast: number;
}

// TODO: Contrast algorithm for selecting black or white is still not perfect
// TODO: Swap out text contrast ratio with "No sufficient text contrast found"
const ContrastText = ({
    textColor,
    textContrastRatio,
    selectedContrast,
}: ContrastTextProps): JSX.Element => {
    const { level } = getWCAGLevel(textContrastRatio, selectedContrast);

    return (
        <div className="contrast-text-container">
            <p className="contrast-text" style={{ color: textColor }}>
                {textContrastRatio !== 0
                    ? `${textContrastRatio}:1 (${level})`
                    : 'N/A'}
            </p>
            <p className="contrast-text-label" style={{ color: textColor }}>
                Text Contrast Ratio
            </p>
        </div>
    );
};

export default ContrastText;
