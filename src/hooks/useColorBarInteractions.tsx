import { useState, useRef, useEffect } from 'react';

interface UseColorBarInteractionsProps {
    colorBars: string[];
    setColorBars: (newColorBars: string[]) => void;
}

interface UseColorBarInteractionsReturnType {
    selectedIndex: number | null;
    draggedIndex: number | null;
    colorBarRefs: React.MutableRefObject<Array<HTMLDivElement | null>>;
    handleKeyDown: (event: React.KeyboardEvent, index: number) => void;
    handleDragStart: (index: number) => void;
    handleDragEnter: (index: number) => void;
    handleDragEnd: () => void;
    setSelectedIndex: React.Dispatch<React.SetStateAction<number | null>>;
}

export const useColorBarInteractions = ({
    colorBars,
    setColorBars,
}: UseColorBarInteractionsProps): UseColorBarInteractionsReturnType => {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
    const [draggedIndex, setDraggedIndex] = useState<number | null>(null);
    const colorBarRefs = useRef<Array<HTMLDivElement | null>>([]);

    useEffect(() => {
        if (selectedIndex !== null) {
            colorBarRefs.current[selectedIndex]?.focus();
        }
    }, [selectedIndex]);

    const swapColors = (fromIndex: number, toIndex: number): void => {
        const newColorBars = [...colorBars];
        [newColorBars[fromIndex], newColorBars[toIndex]] = [
            newColorBars[toIndex],
            newColorBars[fromIndex],
        ];
        setColorBars(newColorBars);
        setDraggedIndex(toIndex);
    };

    const handleKeyDown = (event: React.KeyboardEvent, index: number): void => {
        if (event.key === 'ArrowRight' && index < colorBars.length - 1) {
            if (draggedIndex !== null && draggedIndex === selectedIndex) {
                if (selectedIndex !== null) {
                    swapColors(selectedIndex, selectedIndex + 1);
                    setSelectedIndex(selectedIndex + 1);
                }
            } else {
                setSelectedIndex(index + 1);
            }
        } else if (event.key === 'ArrowLeft' && index > 0) {
            if (draggedIndex !== null && draggedIndex === selectedIndex) {
                if (selectedIndex !== null) {
                    swapColors(selectedIndex, selectedIndex - 1);
                    setSelectedIndex(selectedIndex - 1);
                }
            } else {
                setSelectedIndex(index - 1);
            }
        } else if (event.key === ' ' && selectedIndex !== null) {
            if (draggedIndex === null) {
                setDraggedIndex(selectedIndex);
            } else {
                setDraggedIndex(null);
                setSelectedIndex(null); // Remove focus after dropping

                // Cast currentTarget to HTMLDivElement and call blur
                (event.currentTarget as HTMLDivElement).blur();
            }
        }
    };

    const handleDragStart = (index: number): void => {
        setDraggedIndex(index);
    };

    const handleDragEnter = (index: number): void => {
        if (draggedIndex !== null && draggedIndex !== index) {
            swapColors(draggedIndex, index);
            setDraggedIndex(index);
            setSelectedIndex(index);
        }
    };

    const handleDragEnd = (): void => {
        if (
            draggedIndex !== null &&
            draggedIndex >= 0 &&
            draggedIndex < colorBarRefs.current.length
        ) {
            const ref = colorBarRefs.current[draggedIndex];
            if (ref !== null && ref !== undefined) {
                ref.blur(); // Blur the last dragged element to remove focus
            }
        }
        setDraggedIndex(null);
        setSelectedIndex(null); // Remove focus after dropping
    };

    return {
        selectedIndex,
        draggedIndex,
        colorBarRefs,
        handleKeyDown,
        handleDragStart,
        handleDragEnter,
        handleDragEnd,
        setSelectedIndex,
    };
};
