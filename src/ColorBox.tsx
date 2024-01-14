import React from 'react'

type ColorBoxProps = {
    color: string;
}

// This is the colorbox displaying the color in the palette
const ColorBox: React.FC<ColorBoxProps> = ({ color}) => {
    
  return (
    <div className="color-box" style={{ backgroundColor: color }} />
  );
}

export default ColorBox