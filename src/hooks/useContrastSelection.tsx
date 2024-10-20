import { useState, useCallback } from 'react';

const useContrastSelection = (
    initialTab: number = 1,
): [number, number, (index: number) => void] => {
    const [selectedTab, setSelectedTab] = useState(initialTab);
    const contrastValues = [7.0, 4.5, 3.0];

    const handleTabSelect = useCallback((index: number): void => {
        setSelectedTab(index);
    }, []);

    return [selectedTab, contrastValues[selectedTab], handleTabSelect];
};

export default useContrastSelection;
