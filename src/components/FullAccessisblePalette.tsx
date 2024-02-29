import React, { useState, useEffect } from 'react';
import { calculateContrastRatio } from '../utils';
import SmallColorBox from './SmallColorBox';
import ColorBox from './ColorBox';

interface FullAccessiblePaletteProps {
    selectedContrast: number;
    colors: string[];
    visibleColors: number;
    paletteType: string;
}

const FullAccessiblePalette: React.FC<FullAccessiblePaletteProps> = ({
    selectedContrast,
    colors,
    // visibleColors,
    // paletteType,
}) => {
    const [contrastRatios, setContrastRatios] = useState<number[][]>([]);

    useEffect(() => {
        const newContrastRatios: number[][] = [];
        for (let i = 0; i < colors.length; i++) {
            newContrastRatios[i] = [];
            for (let j = 0; j < colors.length; j++) {
                if (i !== j) {
                    newContrastRatios[i][j] = calculateContrastRatio(
                        colors[i],
                        colors[j],
                    );
                }
            }
        }
        setContrastRatios(newContrastRatios);
    }, [colors]);

    return (
        <div className="adjacent-palette">
            <h2>
                The Full Accessible palette with contrast{' '}
                {selectedContrast === 4.5 ? '4.5:1' : '3:1'}
            </h2>
            {colors.map((color, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center' }}>
                    <ColorBox color={color} />
                    <ul>
                        {contrastRatios[i]?.map((contrastRatio, j) =>
                            i !== j ? (
                                <li key={j}>
                                    <p key={j}>
                                        Contrast with color {j + 1}:{' '}
                                        <SmallColorBox color={colors[j]} />
                                        {` ${contrastRatio.toFixed(2)}:1`}
                                    </p>
                                </li>
                            ) : null,
                        )}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default FullAccessiblePalette;
