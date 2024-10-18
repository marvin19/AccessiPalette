import React from 'react';

interface DropdownProps {
    labels: string[];
    selectedTab: number;
    handleTabSelect: (index: number) => void;
}

const Dropdown = ({
    labels,
    selectedTab,
    handleTabSelect,
}: DropdownProps): JSX.Element => {
    const handleDropdownChange = (
        e: React.ChangeEvent<HTMLSelectElement>,
    ): void => {
        handleTabSelect(Number(e.target.value));
    };

    return (
        <div>
            <label htmlFor="contrast-mode-dropdown">Contrast mode:</label>
            <select
                id="contrast-mode-dropdown"
                value={selectedTab}
                onChange={handleDropdownChange}
                aria-label="Select contrast mode"
                className="contrast-mode-dropdown"
            >
                {labels.map((label, index) => (
                    <option value={index} key={index}>
                        {label}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default Dropdown;
