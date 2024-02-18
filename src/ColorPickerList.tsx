import { FaArrowsUpDown } from "react-icons/fa6";
import { useState } from "react";
import ColorPicker from './ColorPicker';
import ColorText from './ColorText';
import React from 'react';

type ColorPickerListProps = {
    colors: string[];
    visibleColors: number;
    handleColorChange: (newColors: string[]) => void;
}

const ColorPickerList: React.FC<ColorPickerListProps> = ({ colors, handleColorChange, visibleColors }) => {
  const [message, setMessage] = useState('');

  const onColorChange = (newColor: string, index: number) => {
    const updatedColors = [...colors];
    updatedColors[index] = newColor;
    handleColorChange(updatedColors);
  }

  const switchColors = (event: React.MouseEvent<HTMLButtonElement>) => {
    const index = Number((event.target as Element).getAttribute('data-index'));
    const updatedColors = [...colors];
    [updatedColors[index], updatedColors[index + 1]] = [updatedColors[index + 1], updatedColors[index]];
    handleColorChange(updatedColors);
    setMessage('The order of the colors has been switched');
  }


  return (
    <div>
          <ul>
            {colors.slice(0, visibleColors).map((color, index) => (
              <React.Fragment key={index}>
                {index !== 0 && <button className="reorder" data-index={index-1} onClick={switchColors}><FaArrowsUpDown /> Switch order</button>}
                <li className="color-pickers">
                  <>
                    <ColorText
                      color={color}
                      onColorChange={(newColor) => onColorChange(newColor, index)}
                    />
                    <ColorPicker
                      color={color}
                      onColorChange={(newColor) => onColorChange(newColor, index)}
                    />
                  </>
                </li>
              </React.Fragment>
            ))}
          </ul>
          <div aria-live="polite" className="visually-hidden">{message}</div>
      </div>
  )
}

export default ColorPickerList