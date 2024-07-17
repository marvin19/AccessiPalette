import Tabs from './Tabs';
import { useState } from 'react';

interface ContrastModeTabProps {
    setSelectedMode: (value: string) => void;
}

const ContrastModeTab = ({
    setSelectedMode,
}: ContrastModeTabProps): JSX.Element => {
    const [selectedTab, setSelectedTab] = useState(1);

    const handleTabSelect = (index: number): void => {
        setSelectedTab(index);
        const modes = ['all', 'neighbor'];
        setSelectedMode(modes[index]);
    };

    const labels = ['Compare all', 'Only neighbors'];

    return (
        <Tabs
            labels={labels}
            selectedTab={selectedTab}
            ariaLabel="Select contrast level"
            onTabSelect={handleTabSelect}
            className="contrast-mode-tabs"
        />
    );
};

export default ContrastModeTab;
