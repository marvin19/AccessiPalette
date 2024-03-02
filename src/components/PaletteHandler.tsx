import AdjacentPalette from './AdjacentPalette';
import FullAccessiblePalette from './FullAccessisblePalette';
import FindColor from './FindColor';

interface PaletteHandlerProps {
    paletteType: string;
    colors: string[];
    selectedContrast: number;
    visibleColors: number;
}

const PaletteHandler: React.FC<PaletteHandlerProps> = ({
    paletteType,
    colors,
    selectedContrast,
    visibleColors,
}): JSX.Element => {
    return (
        <div className="md:col-span-3 lg:col-start-1 lg:row-start-2 flex flex-col bg-white shadow rounded-lg p-4 border-2 border-gray-200">
            {paletteType === 'Adjacent' ? (
                <AdjacentPalette
                    colors={colors}
                    selectedContrast={selectedContrast}
                    visibleColors={visibleColors}
                    paletteType={'Adjacent'}
                />
            ) : paletteType === 'FullAccessible' ? (
                <FullAccessiblePalette
                    colors={colors}
                    selectedContrast={selectedContrast}
                    visibleColors={visibleColors}
                    paletteType={'FullAccessible'}
                />
            ) : (
                <FindColor
                    colors={colors}
                    selectedContrast={selectedContrast}
                    visibleColors={visibleColors}
                    paletteType={'FindColor'}
                />
            )}
        </div>
    );
};

export default PaletteHandler;
