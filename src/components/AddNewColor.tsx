interface AddNewColorProps {
    addColorBar: () => void;
    colorBars: string[];
}

const AddNewColor = ({
    addColorBar,
    colorBars,
}: AddNewColorProps): JSX.Element => {
    return (
        <>
            {colorBars.length < 10 && (
                <div className="color-bar-container">
                    <div className="color-bar-outer add-color-bar">
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
