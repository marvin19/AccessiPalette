import { useCallback, useRef, useState, useEffect } from 'react';
import type { KeyboardEvent } from 'react';

interface TabProps {
    labels: string[];
    selectedTab: number;
    onTabSelect: (index: number) => void;
}

// TODO: Move functionality to custom hook?
const Tab = ({ labels, selectedTab, onTabSelect }: TabProps): JSX.Element => {
    const [focusedTab, setFocusedTab] = useState(selectedTab);
    // Store refs for each tab button to manage focus manually
    const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);

    const getButtonClass = useCallback(
        (index: number) => (selectedTab === index ? 'active' : ''),
        [selectedTab],
    );

    const handleTabClick = useCallback(
        (index: number) => {
            onTabSelect(index);
        },
        [onTabSelect],
    );

    useEffect(() => {
        if (
            tabRefs.current[focusedTab] !== null &&
            tabRefs.current[focusedTab] !== undefined
        ) {
            tabRefs.current[focusedTab]?.focus();
        }
    }, [focusedTab]);

    const handleKeyDown = useCallback(
        (event: KeyboardEvent<HTMLButtonElement>) => {
            switch (event.key) {
                case 'ArrowRight':
                    event.preventDefault();
                    setFocusedTab((prev) => (prev + 1) % labels.length); // Move to the next tab
                    break;
                case 'ArrowLeft':
                    event.preventDefault();
                    setFocusedTab(
                        (prev) => (prev - 1 + labels.length) % labels.length,
                    ); // Move to the previous tab
                    break;
                case 'Home':
                    event.preventDefault();
                    setFocusedTab(0); // Focus the first tab
                    break;
                case 'End':
                    event.preventDefault();
                    setFocusedTab(labels.length - 1); // Focus the last tab
                    break;
                case 'Enter':
                case ' ':
                    event.preventDefault();
                    onTabSelect(focusedTab); // Activate the currently focused tab
                    break;
                default:
                    break;
            }
        },
        [focusedTab, labels.length, onTabSelect],
    );

    return (
        <>
            {labels.map((label, index) => (
                <button
                    key={index}
                    role="tab"
                    aria-selected={selectedTab === index}
                    aria-controls={`tabpanel-${index}`}
                    id={`tab-${index}`}
                    className={getButtonClass(index)}
                    ref={(el) => {
                        tabRefs.current[index] = el;
                    }}
                    onClick={() => {
                        handleTabClick(index);
                    }}
                    onKeyDown={handleKeyDown}
                    tabIndex={focusedTab === index ? 0 : -1} // Only focused tab is focusable
                    onFocus={() => {
                        setFocusedTab(index);
                    }} // Update the focus when tab is focused manually
                >
                    {label}
                </button>
            ))}
        </>
    );
};

export default Tab;
