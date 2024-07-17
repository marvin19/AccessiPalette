import { useEffect, useState } from 'react';
import NeighborColorBarList from './NeighborColorBarList';
import AllColorBarList from './AllColorBarList';

interface PaletteProps {
    selectedContrast: number;
    selectedMode: string;
}

const Palette = ({
    selectedContrast,
    selectedMode,
}: PaletteProps): JSX.Element => {
    const [mode, setMode] = useState(selectedMode);

    useEffect(() => {
        setMode(selectedMode); // Force re-render when selectedMode changes
    }, [selectedMode]);

    return (
        <div className="palette">
            {mode === 'neighbor' ? (
                <NeighborColorBarList
                    selectedContrast={selectedContrast}
                    selectedMode={selectedMode}
                />
            ) : (
                <AllColorBarList
                    selectedContrast={selectedContrast}
                    selectedMode={selectedMode}
                />
            )}
        </div>
    );
};

export default Palette;
