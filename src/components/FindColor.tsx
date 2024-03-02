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
                {/* TODO: Create a component for this when UI is decided on */}
                {contrastColor !== null ? (
                    <p>Contrast color: {contrastColor}</p>
                ) : (
                    <p>No colors available with enough contrast.</p>
                )}
            </div>
            <Arrow direction="left" />
            <ColorBox color={colors[1]} />
        </div>
    );
};

export default FindColor;
