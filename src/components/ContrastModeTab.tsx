const ContrastModeTab = (): JSX.Element => {
    return (
        <div className="tabs">
            <div
                role="tablist"
                aria-label="Select contrast level"
                className="contrast-mode-tabs"
            >
                <button
                    id="tab-1"
                    type="button"
                    role="tab"
                    aria-controls="tabpanel-1"
                >
                    Compare all
                </button>
                <button
                    id="tab-2"
                    type="button"
                    role="tab"
                    aria-controls="tabpanel-2"
                    aria-selected="true"
                >
                    Only neighbors
                </button>
            </div>
        </div>
    );
};

export default ContrastModeTab;
