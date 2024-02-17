import { FaArrowsUpDown } from "react-icons/fa6";
import ColorPicker from './ColorPicker';
import ColorText from './ColorText';
import React from 'react';

type ColorPickerListProps = {
    colors: string[];
    visibleColors: number;
    handleColorChange: (newColors: string[]) => void;
}

const ColorPickerList: React.FC<ColorPickerListProps> = ({ colors, handleColorChange, visibleColors }) => {

  const onColorChange = (newColor: string, index: number) => {
    const updatedColors = [...colors];
    updatedColors[index] = newColor;
    handleColorChange(updatedColors);
  }

  const switchColors = (index: number) => {
    const updatedColors = [...colors];
    [updatedColors[index], updatedColors[index + 1]] = [updatedColors[index + 1], updatedColors[index]];
    handleColorChange(updatedColors);
  }

  return (
          <ul>
            {colors.slice(0, visibleColors).map((color, index) => (
              <React.Fragment key={index}>
                {index !== 0 && <button className="reorder" onClick={() => switchColors(index-1)}><FaArrowsUpDown /> Switch order</button>}
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
  )
}

export default ColorPickerList