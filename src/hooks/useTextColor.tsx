import { useEffect, useState } from 'react';
import { calculateContrastRatio } from '../utils';

const BLACK = '#000000';
const WHITE = '#FFFFFF';

const useTextColor = (backgroundColor: string): string => {
    const [textColor, setTextColor] = useState('#000000');

    useEffect(() => {
        const textContrastRatio = calculateContrastRatio(
            '#000000',
            backgroundColor,
        );
        setTextColor(textContrastRatio < 3.0 ? WHITE : BLACK);
    }, [backgroundColor]);

    return textColor;
};

export default useTextColor;
