import React from 'react';
import ContrastBoxSmall from './ContrastBoxSmall';
import useOtherColor from '../hooks/useOtherColor';

interface ContrastBoxFullProps {
    activeColor: string;
    otherColors: string[];
    selectedContrast: number;
}

const ContrastBoxFull: React.FC<ContrastBoxFullProps> = ({
    activeColor,
    otherColors,
    selectedContrast,
}): JSX.Element => {
    const filteredColors = useOtherColor(otherColors, activeColor);
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
