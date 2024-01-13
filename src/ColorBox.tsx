import React from 'react'

type ColorBoxProps = {
    selectedOption: number;
    colors: string[];
    visibleColors: number;
}


const ColorBox: React.FC<ColorBoxProps> = ({ selectedOption }) => {
  return (
    <div className="color-box">{selectedOption}</div>
  )
}

export default ColorBox