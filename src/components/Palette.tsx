import ColorBarList from './ColorBarList';

interface PaletteProps {
    selectedContrast: number;
}

const Palette = ({ selectedContrast }: PaletteProps): JSX.Element => {
    return (
        <div className="palette">
            <ColorBarList selectedContrast={selectedContrast} />
        </div>
    );
};

export default Palette;
