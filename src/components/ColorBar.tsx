import React from 'react';
import closeButton from '../assets/x-close.svg';
import ContrastBoxNew from './ContrastBoxNew';

interface ColorBarProps {
    onRemove: () => void;
    color: string;
    showContrastBox: boolean;
}

const ColorBar: React.FC<ColorBarProps> = ({
    onRemove,
    color,
    showContrastBox,
}): JSX.Element => {
    return (
        <div className="color-bar-outer" style={{ backgroundColor: color }}>
            <div className="color-bar-inner">
                <div className="color-bar-inner-inner">
                    <div className="contrast-text-container">
                        <p className="contrast-text">4.5:1</p>
                    </div>
                    <p className="contrast-text-label">Text Contrast Ratio</p>
                </div>
                {showContrastBox && <ContrastBoxNew />}
            </div>
            <button className="remove-color" onClick={onRemove}>
                <img src={closeButton} className="close-button" alt="Remove" />
            </button>
        </div>
    );
};

export default ColorBar;
