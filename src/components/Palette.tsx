import ColorBarList from './ColorBarList';

interface PaletteProps {
    selectedContrast: number;
    selectedMode: string;
    enableDragAndDrop: boolean;
}

const Palette = ({
    selectedContrast,
    selectedMode,
    enableDragAndDrop,
}: PaletteProps): JSX.Element => {
    return (
        <div className="palette">
            <ColorBarList
                selectedContrast={selectedContrast}
                selectedMode={selectedMode}
                enableDragAndDrop={enableDragAndDrop}
            />
        </div>
    );
};

export default Palette;
