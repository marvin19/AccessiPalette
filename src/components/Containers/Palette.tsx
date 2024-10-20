import ColorBarModes from '../ColorBars/ColorBarModes';

interface PaletteProps {
    selectedContrast: number;
    selectedMode: 'all' | 'third' | 'neighbor';
}

const Palette = ({
    selectedContrast,
    selectedMode,
}: PaletteProps): JSX.Element => {
    return (
        <div className="palette">
            <ColorBarModes
                selectedContrast={selectedContrast}
                selectedMode={selectedMode}
            />
        </div>
    );
};

export default Palette;
