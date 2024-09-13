interface AddNewColorProps {
    addColorBar: () => void;
    colorBars: string[];
    selectedMode?: string;
}

const AddNewColor = ({
    addColorBar,
    colorBars,
    selectedMode,
}: AddNewColorProps): JSX.Element | null => {
    if (colorBars.length >= 20) return null;
    return (
        <button
            className="color-bar-container add-color-bar-button"
            onClick={addColorBar}
        >
            <div
                className={`color-bar-outer add-color-bar ${selectedMode === 'all' ? 'all' : ''}`}
            >
                <span>+ Add color</span>
            </div>
        </button>
    );
};

export default AddNewColor;
