import React from 'react'
import { useState, useEffect } from 'react';

type ColorTextProps = {
    color: string;
    onColorChange: (color: string) => void;
}

const ColorText: React.FC<ColorTextProps> = ({ color, onColorChange }) => {
    const [inputColor, setInputColor] = useState('color');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onColorChange(inputColor);
    }

    const handleInputChange = (e) => {
        let value = e.target.value;

        if(value.length > 7) {
            setError('Input cannot exceed 7 characters.');
            setMessage('Input cannot exceed 7 characters.')
            return;
        } else {
            setError('');
        }

        if(value && value[0] !== '#') {
            value = '#' + value;
            setMessage('A hash symbol was added to the start of your hex color input')
        } else {
            setMessage('');
        }
        setInputColor(value);
    }

    useEffect(() => {
        setInputColor(color);
    }, [color]);

  return (
    <form onSubmit={handleSubmit}>
        <div id="hexcolorDescription" className="visually-hidden">Enter a hex color value. It should start with a hash symbol followed by six hexadecimal characters.</div>
        <label className="hex-color-text" htmlFor="hexcolor"> HEX: </label>
        <input type="text" value={inputColor} onChange={handleInputChange} id="hexcolor" name="hexcolor" aria-describedby="hexcolorDescription" />
        <div aria-live="polite" className="visually-hidden">{message}</div>
        {error && <div className="error-message">{error}</div>}
    </form>
  )
}

export default ColorText