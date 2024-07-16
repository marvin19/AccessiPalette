import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
// import type { SizeProp } from '@fortawesome/fontawesome-svg-core';

interface ArrowProps {
    direction: 'left' | 'right';
    // size?: SizeProp;
}

const Arrow: React.FC<ArrowProps> = ({ direction }): JSX.Element => {
    const icon = direction === 'right' ? faArrowRight : faArrowLeft;
    return (
        <div className="flex items-center justify-center">
            <FontAwesomeIcon icon={icon} />
        </div>
    );
};

export default Arrow;
