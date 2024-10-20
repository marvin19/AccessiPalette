interface ContrastTextProps {
    textColor: string;
    contrastRatio: string | null;
}

// TODO: Rename contrastRatio to textContrastRatio
const ContrastText = ({
    textColor,
    contrastRatio,
}: ContrastTextProps): JSX.Element => {
    return (
        <div className="contrast-text-container">
            <p className="contrast-text" style={{ color: textColor }}>
                {contrastRatio !== 'N/A' ? `${contrastRatio}:1` : 'N/A'}
            </p>
            <p className="contrast-text-label" style={{ color: textColor }}>
                Text Contrast Ratio
            </p>
        </div>
    );
};

export default ContrastText;
