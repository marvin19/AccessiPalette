import Tabs from './Tabs';
import { useState, useEffect } from 'react';

interface ContrastModeTabProps {
    setSelectedMode: (value: string) => void;
}

const ContrastModeTab = ({
    setSelectedMode,
}: ContrastModeTabProps): JSX.Element => {
    const [selectedTab, setSelectedTab] = useState(1);
    const [isDropdown, setIsDropdown] = useState(false);

    const handleTabSelect = (index: number): void => {
        setSelectedTab(index);
        const modes = ['all', 'neighbor', 'third'];
        setSelectedMode(modes[index]);
    };

    useEffect(() => {
        const handleResize = (): void => {
            setIsDropdown(window.innerWidth < 1350);
        };
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const labels = ['Compare all', 'Only neighbors', 'Find third color'];

    return isDropdown ? (
        <div>
            <label htmlFor="contrast-mode-dropdown">Contrast mode:</label>
            <select
                value={selectedTab}
                onChange={(e) => {
                    handleTabSelect(Number(e.target.value));
                }}
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
    ) : (
        <Tabs
            labels={labels}
            selectedTab={selectedTab}
            ariaLabel="Select contrast mode"
            onTabSelect={handleTabSelect}
            className="contrast-mode-tabs"
        />
    );
};

export default ContrastModeTab;
