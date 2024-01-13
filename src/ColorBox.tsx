import React from 'react'

type ColorBoxProps = {
    colors: string[];
    visibleColors: number;
}


const ColorBox: React.FC<ColorBoxProps> = ({ colors, visibleColors }) => {

  const boxes = colors.slice(0, visibleColors).map((color, index) => {
    return (
      <div key={index} className="color-box m-2" style={{ backgroundColor: color}}></div>
    )
    });
    


  
  return (
    <div className="color-box-container">
      {boxes}
    </div>
  );
}

export default ColorBox