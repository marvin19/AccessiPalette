import { useState, useEffect } from 'react';
import Tabs from './Tabs';
interface ContrastSelectTabProps {
    setSelectedContrast: (value: number) => void;
}

const ContrastSelectTab = ({
    setSelectedContrast,
}: ContrastSelectTabProps): JSX.Element => {
    const [selectedTab, setSelectedTab] = useState(1);
    const [isDropdown, setIsDropdown] = useState(false);

    const handleTabSelect = (index: number): void => {
        setSelectedTab(index);
        const contrastValues = [7.0, 4.5, 3.0];
        setSelectedContrast(contrastValues[index]);
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

    useEffect(() => {
        setSelectedContrast(4.5);
    }, [setSelectedContrast]);

    const labels = ['Level AAA (7:1)', 'Level AA (4.5:1)', 'Level A (3:1)'];

    return isDropdown ? (
        <div>
            <label htmlFor="contrast-select-dropdown">Contrast level: </label>
            <select
                value={selectedTab}
                onChange={(e) => {
                    handleTabSelect(Number(e.target.value));
                }}
                aria-label="Select contrast level"
                className="contrast-select-dropdown"
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
            ariaLabel="Select contrast level"
            onTabSelect={handleTabSelect}
            className="contrast-tabs"
        />
    );
};

export default ContrastSelectTab;
