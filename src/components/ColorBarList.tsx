import CompareAll from './CompareAll';
import ThirdColor from './ThirdColor';
import Neighbor from './Neighbor';
import useColorGeneration from '../hooks/useColorGeneration';

interface ColorBarListProps {
    selectedContrast: number;
    selectedMode: string;
}

const ColorBarList = ({
    selectedContrast,
    selectedMode,
}: ColorBarListProps): JSX.Element => {
    const {
        colors: colorBars,
        handleColorChange,
        addColorBar,
        removeColorBar,
    } = useColorGeneration();

    if (selectedMode === 'third') {
        return <ThirdColor selectedContrast={selectedContrast} />;
    } else if (selectedMode === 'all') {
        return (
            <CompareAll
                colorBars={colorBars}
                selectedMode={selectedMode}
                selectedContrast={selectedContrast}
                addColorBar={addColorBar}
                handleColorChange={handleColorChange}
                removeColorBar={removeColorBar}
            />
        );
    } else {
        return (
            <Neighbor
                colorBars={colorBars}
                selectedMode={selectedMode}
                selectedContrast={selectedContrast}
                setColorBars={(setColors) => {
                    handleColorChange(0, setColors[0]);
                }}
                handleColorChange={handleColorChange}
                removeColorBar={removeColorBar}
                addColorBar={addColorBar}
            />
        );
    }
};

export default ColorBarList;
