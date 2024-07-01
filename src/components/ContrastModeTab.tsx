import Tabs from './Tabs';
import { useState } from 'react';

const ContrastModeTab = (): JSX.Element => {
    const [selectedTab, setSelectedTab] = useState(0);

    const handleTabSelect = (index: number): void => {
        setSelectedTab(index);
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
