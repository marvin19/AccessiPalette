const ContrastSelectTab = (): JSX.Element => {
    return (
        <div className="tabs">
            <div
                role="tablist"
                aria-label="Select contrast level"
                className="contrast-tabs"
            >
                <button
                    id="tab-1"
                    type="button"
                    role="tab"
                    aria-selected="true"
                    aria-controls="tabpanel-1"
                >
                    Level AAA (7:1)
                </button>
                <button
                    id="tab-2"
                    type="button"
                    role="tab"
                    aria-controls="tabpanel-2"
                >
                    Level AA (4.5:1)
                </button>
                <button
                    id="tab-3"
                    type="button"
                    role="tab"
                    aria-controls="tabpanel-3"
                >
                    Level A (3:1)
                </button>
            </div>
        </div>
    );
};

export default ContrastSelectTab;
