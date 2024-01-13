import React from 'react'

type ColorBoxProps = {
    color: string;
}


const ColorBox: React.FC<ColorBoxProps> = ({ color}) => {
    
  return (
    <div className="color-box m-2" style={{ backgroundColor: color }} />
  );
}

export default ColorBox