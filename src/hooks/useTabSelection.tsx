import { useState, useCallback } from 'react';

type Mode = 'all' | 'neighbor' | 'third';

const useTabSelection = (
    initialTab: number = 1,
): [number, Mode, (index: number) => void] => {
    const [selectedTab, setSelectedTab] = useState(initialTab);
    const modes: Mode[] = ['all', 'neighbor', 'third'];

    const handleTabSelect = useCallback((index: number): void => {
        setSelectedTab(index);
    }, []);

    return [selectedTab, modes[selectedTab], handleTabSelect];
};

export default useTabSelection;
