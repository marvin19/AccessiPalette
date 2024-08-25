import ColorBarList from './ColorBarList';

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
            <ColorBarList
                selectedContrast={selectedContrast}
                selectedMode={selectedMode}
            />
        </div>
    );
};

export default Palette;
