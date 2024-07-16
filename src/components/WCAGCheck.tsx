import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCheckCircle,
    faTimesCircle,
} from '@fortawesome/free-solid-svg-icons';

interface WCAGCheckProps {
    meetsWCAG: boolean;
    fontSize: string;
}

const WCAGCheck: React.FC<WCAGCheckProps> = ({ meetsWCAG, fontSize }) => {
    return (
        <div className="check-text" style={{ fontSize }}>
            {meetsWCAG ? (
                <FontAwesomeIcon
                    icon={faCheckCircle}
                    style={{ color: '#0f8548' }}
                />
            ) : (
                <FontAwesomeIcon
                    icon={faTimesCircle}
                    style={{ color: '#b51717' }}
                />
            )}
        </div>
    );
};

export default WCAGCheck;
