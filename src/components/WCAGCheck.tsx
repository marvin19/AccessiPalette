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
                <p className="passes">
                    <FontAwesomeIcon
                        icon={faCheckCircle}
                        style={{ color: '#0f8548' }}
                    />
                </p>
            ) : (
                <p className="fails">
                    <FontAwesomeIcon
                        icon={faTimesCircle}
                        style={{ color: '#b51717' }}
                    />
                </p>
            )}
        </div>
    );
};

export default WCAGCheck;
