import React, { useEffect, useState } from 'react';
import { generateThirdContrastColor } from '../utils';
import ColorBox from './ColorBox';
import Arrow from './Arrow';

interface FindColorProps {
    selectedContrast: number;
    colors: string[];
    visibleColors?: number;
    paletteType?: string;
}

// adding a comment to create a PR
const FindColor: React.FC<FindColorProps> = ({ colors, selectedContrast }) => {
    const [contrastColor, setContrastColor] = useState<string | null>(null);

    useEffect(() => {
        const newColor = generateThirdContrastColor(colors, selectedContrast);
        setContrastColor(newColor);
    }, [colors, selectedContrast]);

    return (
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <ColorBox color={colors[0]} />
            <Arrow direction="right" />
            <div style={{ textAlign: 'center' }}>
                <ColorBox color={contrastColor ?? 'transparent'} />
                {contrastColor !== null ? (
                    <p>Contrast color: {contrastColor}</p>
                ) : (
                    <p>No colors available with enough contrast.</p>
                )}
            </div>
            <div className="flex items-center justify-center">
                <Arrow direction="left" />
            </div>
            <ColorBox color={colors[1]} />
        </div>
    );
};

export default FindColor;
