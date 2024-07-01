import { useState } from 'react';
import Tabs from './Tabs';

const ContrastSelectTab = (): JSX.Element => {
    const [selectedTab, setSelectedTab] = useState(0);

    const handleTabSelect = (index: number): void => {
        setSelectedTab(index);
    };

    const labels = ['Level AAA (7:1)', 'Level AA (4.5:1)', 'Level A (3:1)'];

    return (
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
