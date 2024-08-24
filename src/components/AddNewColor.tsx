interface AddNewColorProps {
    addColorBar: () => void;
    colorBars: string[];
    selectedMode?: string;
}

const AddNewColor = ({
    addColorBar,
    colorBars,
    selectedMode,
}: AddNewColorProps): JSX.Element => {
    return (
        <>
            {colorBars.length < 10 && (
                <div className="color-bar-container">
                    <div
                        className={`color-bar-outer add-color-bar ${selectedMode === 'all' ? 'all' : ''}`}
                    >
                        <button
                            onClick={addColorBar}
                            className="add-color-bar-button"
                        >
                            + Add color
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default AddNewColor;
