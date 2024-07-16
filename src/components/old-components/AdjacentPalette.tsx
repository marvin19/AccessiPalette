import React from 'react';
import ColorAndContrast from './ColorAndContrast';
import SectionTitle from '../SectionTitle';

interface AdjacentPaletteProps {
    selectedContrast: number;
    colors: string[];
    visibleColors: number;
    paletteType: string;
    id: string;
}

const AdjacentPalette: React.FC<AdjacentPaletteProps> = ({
    selectedContrast,
    colors,
    visibleColors,
    paletteType,
    id,
}) => {
    const selectedContrastInput = selectedContrast === 4.5 ? '4.5:1' : '3:1';
    return (
        <div id={id} className="adjacent-palette">
            <SectionTitle
                title="The Adjacent Color palette with contrast "
                selectedContrast={selectedContrastInput}
            />
            <div className="copy">
                <p>
                    This section checks contrast between adjacent colors for
                    clear visualization if stacking colors in e.g charts.{' '}
                    <strong>Non-adjacent colors are not compared</strong>
                </p>
                <p>
                    If you want to keep a color in your color palette, but the
                    neighbor color has not enough contrast. Try drag and drop in
                    section 2.
                </p>
            </div>
            <ColorAndContrast
                colors={colors}
                visibleColors={visibleColors}
                selectedContrast={selectedContrast}
                paletteType={paletteType}
            />
        </div>
    );
};

export default AdjacentPalette;
