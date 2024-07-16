import React from 'react';

interface TabsProps {
    labels: string[];
    selectedTab: number;
    ariaLabel: string;
    onTabSelect: (index: number) => void;
    className?: string;
}

const Tabs: React.FC<TabsProps> = ({
    labels,
    selectedTab,
    ariaLabel,
    onTabSelect,
    className,
}) => {
    return (
        <div className="tabs">
            <div
                role="tablist"
                aria-label={ariaLabel}
                className={`tabs-list ${className}`}
            >
                {labels.map((label, index) => (
                    <button
                        key={index}
                        id={`tab-${index + 1}`}
                        type="button"
                        role="tab"
                        aria-controls={`tabpanel-${index + 1}`}
                        aria-selected={selectedTab === index}
                        onClick={() => {
                            onTabSelect(index);
                        }}
                        className={selectedTab === index ? 'active' : ''}
                    >
                        {label}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Tabs;
