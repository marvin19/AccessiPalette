interface TabsProps {
    labels: string[];
    selectedTab: number;
    onTabSelect: (index: number) => void;
    ariaLabel: string;
    className?: string;
}

const Tabs = ({
    labels,
    selectedTab,
    onTabSelect,
    ariaLabel,
    className,
}: TabsProps): JSX.Element => {
    return (
        <div
            className={`tabs ${className}`}
            role="tablist"
            aria-label={ariaLabel}
        >
            {labels.map((label, index) => (
                <button
                    key={index}
                    role="tab"
                    aria-selected={selectedTab === index}
                    className={selectedTab === index ? 'active' : ''}
                    onClick={() => {
                        onTabSelect(index);
                    }}
                >
                    {label}
                </button>
            ))}
        </div>
    );
};

export default Tabs;
