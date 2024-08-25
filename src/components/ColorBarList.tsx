import { memo } from 'react';
import CompareAll from './CompareAll';
import ThirdColor from './ThirdColor';
import Neighbor from './Neighbor';
import useColorGeneration from '../hooks/useColorGeneration';

interface ColorBarListProps {
    selectedContrast: number;
    selectedMode: 'all' | 'third' | 'neighbor';
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
        setColorBars,
    } = useColorGeneration();

    const componentMapping: Record<string, JSX.Element> = {
        third: <ThirdColor selectedContrast={selectedContrast} />,
        all: (
            <CompareAll
                colorBars={colorBars}
                selectedMode={selectedMode}
                selectedContrast={selectedContrast}
                addColorBar={addColorBar}
                handleColorChange={handleColorChange}
                removeColorBar={removeColorBar}
            />
        ),
        neighbor: (
            <Neighbor
                colorBars={colorBars}
                selectedMode={selectedMode}
                selectedContrast={selectedContrast}
                setColorBars={setColorBars}
                handleColorChange={handleColorChange}
                removeColorBar={removeColorBar}
                addColorBar={addColorBar}
            />
        ),
    };

    return componentMapping[selectedMode];
};

export default memo(ColorBarList);
