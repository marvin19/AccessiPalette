import React, { useState, useEffect } from 'react';
import { validateColorInput, formatColorInput } from './utils';

interface ColorTextProps {
    color: string;
    onColorChange: (color: string) => void;
}

const ColorText: React.FC<ColorTextProps> = ({ color, onColorChange }) => {
    const [inputColor, setInputColor] = useState('color');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const hexInputId = `hex-input-${color}`;

    const handleSubmit = (e): void => {
        e.preventDefault();
        onColorChange(inputColor);
    };

    const handleInputChange = (e): void => {
        let value: string = e.target.value;

        const errorMessage = validateColorInput(value);
        if (errorMessage !== null) {
            setError(errorMessage);
            setMessage(errorMessage);
            return;
        } else {
            setError('');
        }

        value = formatColorInput(value);
        if (value[0] === '#') {
            setMessage(
                'A hash symbol was added to the start of your hex color input',
            );
        } else {
            setMessage('');
        }
        setInputColor(value);
    };

    useEffect(() => {
        setInputColor(color);
    }, [color]);

    return (
        <form onSubmit={handleSubmit}>
            <div id="hexcolorDescription" className="visually-hidden">
                Enter a hex color value. It should start with a hash symbol
                followed by six hexadecimal characters.
            </div>
            <label className="hex-color-text" htmlFor={hexInputId}>
                {' '}
                HEX:
            </label>
            <input
                id={hexInputId}
                type="text"
                value={inputColor}
                onChange={handleInputChange}
                name="hexcolor"
                aria-describedby="hexcolorDescription"
            />
            <div aria-live="polite" className="visually-hidden">
                {message}
            </div>
            {error !== '' && (
                <div aria-hidden="true" className="error-message">
                    {error}
                </div>
            )}
        </form>
    );
};

export default ColorText;
