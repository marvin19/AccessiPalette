interface ToolbarProps {
    enableDragAndDrop: boolean;
    setEnableDragAndDrop: (enable: boolean) => void;
}

const Toolbar = ({
    enableDragAndDrop,
    setEnableDragAndDrop,
}: ToolbarProps): JSX.Element => {
    return (
        <div className="toolbar-banner">
            <div className="toolbar-inside-banner">
                <h2>Toolbar:</h2>
                <div className="toolbar-tools">
                    <input
                        type="checkbox"
                        id="drag-and-drop"
                        checked={enableDragAndDrop}
                        onChange={(e) => {
                            setEnableDragAndDrop(e.target.checked);
                        }}
                    />
                    <label htmlFor="drag-and-drop">Enable drag and drop</label>
                </div>
            </div>
        </div>
    );
};

export default Toolbar;
