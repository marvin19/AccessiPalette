import React, { useEffect, useState } from 'react';
import { calculateContrastRatio, getRgb, rgbToHex } from '../utils';

interface FindColorProps {
    selectedContrast: number;
    colors: string[];
    visibleColors: any; // TODO
    paletteType: any;
}

// adding a comment to create a PR
const FindColor: React.FC<FindColorProps> = ({
    colors,
    selectedContrast,
    // visibleColors,
    // paletteType,
}) => {
    const [contrastColor, setContrastColor] = useState<string | null>(null);

    useEffect(() => {
        let newColor: string | null = null;
        for (let i = 0; i < 1000; i++) {
            newColor = rgbToHex(getRgb(), getRgb(), getRgb());
            if (
                calculateContrastRatio(newColor, colors[0]) >=
                    selectedContrast &&
                calculateContrastRatio(newColor, colors[1]) >= selectedContrast
            ) {
                break;
            } else {
                newColor = null;
            }
        }
        setContrastColor(newColor);
    }, [colors, selectedContrast]);

    return (
        <div>
            {contrastColor !== null ? (
                <>
                    <div
                        style={{
                            width: '50px',
                            height: '50px',
                            backgroundColor: contrastColor,
                        }}
                    />
                    <p>Contrast color: {contrastColor}</p>
                </>
            ) : (
                'No colors available with enough contrast.'
            )}
        </div>
    );
};

export default FindColor;
