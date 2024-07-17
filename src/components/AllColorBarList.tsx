import ColorBarList from './ColorBarList';

interface AllColorBarListProps {
    selectedContrast: number;
    selectedMode: string;
}

const AllColorBarList = ({
    selectedContrast,
    selectedMode,
}: AllColorBarListProps): JSX.Element => {
    const renderModeSpecificContent = (
        index: number,
        colorBars: string[],
    ): JSX.Element | null => {
        return index < colorBars.length - 1 ? <div>New content</div> : null;
    };

    return (
        <ColorBarList
            selectedContrast={selectedContrast}
            selectedMode={selectedMode}
            renderModeSpecificContent={renderModeSpecificContent}
        />
    );
};

export default AllColorBarList;
