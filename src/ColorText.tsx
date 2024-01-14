import React from 'react'
import { useState, useEffect } from 'react';

type ColorTextProps = {
    color: string;
    onColorChange: (color: string) => void;
}

const ColorText: React.FC<ColorTextProps> = ({ color, onColorChange }) => {
    const [inputColor, setInputColor] = useState('color');

    const handleSubmit = (e) => {
        e.preventDefault();
        onColorChange(inputColor);
    }

    useEffect(() => {
        setInputColor(color);
    }, [color]);

  return (
    <form onSubmit={handleSubmit}>
        <label className="hex-color-text" htmlFor="hexcolor"> HEX: </label>
        <input type="text" value={inputColor} onChange={(e) => setInputColor(e.target.value)} id="hexcolor" name="hexcolor" />
    </form>
  )
}

export default ColorText