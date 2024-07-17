import ColorBarList from './ColorBarList';
import ContrastBox from './ContrastBox';

interface NeighborColorBarListProps {
    selectedContrast: number;
    selectedMode: string;
}

const NeighborColorBarList = ({
    selectedContrast,
    selectedMode,
}: NeighborColorBarListProps): JSX.Element => {
    const renderModeSpecificContent = (
        index: number,
        colorBars: string[],
    ): JSX.Element | null => {
        return index < colorBars.length - 1 ? (
            <ContrastBox
                leftColor={colorBars[index]}
                rightColor={colorBars[index + 1]}
                selectedContrast={selectedContrast}
            />
        ) : null;
    };

    return (
        <ColorBarList
            selectedContrast={selectedContrast}
            selectedMode={selectedMode}
            renderModeSpecificContent={renderModeSpecificContent}
        />
    );
};

export default NeighborColorBarList;
