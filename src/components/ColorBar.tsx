import React from 'react';
import closeButton from '../assets/x-close.svg';
import { calculateContrastRatio } from '../utils';

interface ColorBarProps {
    onRemove: () => void;
    color: string;
}

const ColorBar: React.FC<ColorBarProps> = ({
    onRemove,
    color,
}): JSX.Element => {
    const textColor = '#000000';
    const contrastRatio = calculateContrastRatio(color, textColor).toFixed(2);

    return (
        <div className="color-bar-outer" style={{ backgroundColor: color }}>
            <div className="color-bar-inner">
                <div className="color-bar-inner-inner">
                    <div className="contrast-text-container">
                        <p className="contrast-text">{contrastRatio}:1</p>
                    </div>
                    <p className="contrast-text-label">Text Contrast Ratio</p>
                </div>
            </div>
            <button className="remove-color" onClick={onRemove}>
                <img src={closeButton} className="close-button" alt="Remove" />
            </button>
        </div>
    );
};

export default ColorBar;
