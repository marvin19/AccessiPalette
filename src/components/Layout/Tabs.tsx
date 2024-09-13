import { useCallback } from 'react';

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
    const handleTabClick = useCallback(
        (index: number) => {
            onTabSelect(index);
        },
        [onTabSelect],
    );

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
                    aria-controls={`tabpanel-${index}`}
                    id={`tab-${index}`}
                    className={selectedTab === index ? 'active' : ''}
                    onClick={() => {
                        handleTabClick(index);
                    }}
                >
                    {label}
                </button>
            ))}
        </div>
    );
};

export default Tabs;
