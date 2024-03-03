import React from 'react';
import ColorBox from './ColorBox';
import Arrow from './Arrow';
import useContrastColor from '../hooks/useContrastColor';

interface FindColorProps {
    selectedContrast: number;
    colors: string[];
    visibleColors?: number;
    paletteType?: string;
    id: string;
}

const FindColor: React.FC<FindColorProps> = ({
    colors,
    selectedContrast,
    id,
}) => {
    const contrastColor = useContrastColor(colors, selectedContrast);

    return (
        <div
            id={id}
            style={{ display: 'flex', justifyContent: 'space-between' }}
        >
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
