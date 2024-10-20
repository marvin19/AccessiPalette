interface ContrastTextProps {
    textColor: string;
    textContrastRatio: string | null;
}

// TODO: Add contrast level text behind contrast ratio
// TODO: Swap out text contrast ratio with "No sufficient text contrast found"
const ContrastText = ({
    textColor,
    textContrastRatio,
}: ContrastTextProps): JSX.Element => {
    return (
        <div className="contrast-text-container">
            <p className="contrast-text" style={{ color: textColor }}>
                {textContrastRatio !== 'N/A' ? `${textContrastRatio}:1` : 'N/A'}
            </p>
            <p className="contrast-text-label" style={{ color: textColor }}>
                Text Contrast Ratio
            </p>
        </div>
    );
};

export default ContrastText;
