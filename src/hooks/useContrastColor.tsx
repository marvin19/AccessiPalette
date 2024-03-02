import { useState, useEffect } from 'react';
import { generateThirdContrastColor } from '../utils';

const useContrastColor = (
    colors: string[],
    selectedContrast: number,
): string | null => {
    const [contrastColor, setContrastColor] = useState<string | null>(null);

    useEffect(() => {
        const newColor = generateThirdContrastColor(colors, selectedContrast);
        setContrastColor(newColor);
    }, [colors, selectedContrast]);

    return contrastColor;
};

export default useContrastColor;
