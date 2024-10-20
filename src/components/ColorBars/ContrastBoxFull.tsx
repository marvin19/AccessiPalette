import ContrastBoxSmall from './ContrastBoxSmall';
import useOtherColor from '../../hooks/useOtherColor';

interface ContrastBoxFullProps {
    activeColor: string;
    otherColors: string[];
    selectedContrast: number;
}

const ContrastBoxFull = ({
    activeColor,
    otherColors,
    selectedContrast,
}: ContrastBoxFullProps): JSX.Element => {
    const filteredColors: string[] = useOtherColor(otherColors, activeColor);
    const uniqueOtherColors = Array.from(new Set(filteredColors));

    return (
        <div className="contrast-box-full">
            {uniqueOtherColors.map((otherColor, index) => (
                <ContrastBoxSmall
                    key={index}
                    activeColor={activeColor}
                    otherColor={otherColor}
                    selectedContrast={selectedContrast}
                />
            ))}
        </div>
    );
};

export default ContrastBoxFull;
