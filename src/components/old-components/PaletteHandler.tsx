import AdjacentPalette from './AdjacentPalette';
import FullAccessiblePalette from '../FullAccessiblePalette';
import FindColor from '../FindColor';

interface PaletteHandlerProps {
    paletteType: string;
    colors: string[];
    selectedContrast: number;
    visibleColors: number;
    id: string;
}

const PaletteHandler: React.FC<PaletteHandlerProps> = ({
    paletteType,
    colors,
    selectedContrast,
    visibleColors,
    id,
}): JSX.Element => {
    return (
        <div className="md:col-span-3 lg:col-start-1 lg:row-start-2 flex flex-col bg-white shadow rounded-lg p-4 border-2 border-gray-200">
            {paletteType === 'Adjacent' ? (
                <AdjacentPalette
                    colors={colors}
                    selectedContrast={selectedContrast}
                    visibleColors={visibleColors}
                    paletteType={'Adjacent'}
                    id={id}
                />
            ) : paletteType === 'FullAccessible' ? (
                <FullAccessiblePalette
                    colors={colors}
                    selectedContrast={selectedContrast}
                    visibleColors={visibleColors}
                    paletteType={'FullAccessible'}
                    id={id}
                />
            ) : (
                <FindColor
                    colors={colors}
                    selectedContrast={selectedContrast}
                    visibleColors={visibleColors}
                    paletteType={'FindColor'}
                    id={id}
                />
            )}
        </div>
    );
};

export default PaletteHandler;
