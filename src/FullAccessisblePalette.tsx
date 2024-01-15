import React from 'react'

type FullAccessiblePaletteProps = {
    selectedContrast: number;
    colors: string[];
    visibleColors: number;
    paletteType: string;
} 

const FullAccessiblePalette: React.FC<FullAccessiblePaletteProps> = ({ selectedContrast, colors, visibleColors, paletteType}) => {
   
  return (
    <div className="adjacent-palette">
      <h2>The Full Accessible palette with contrast {selectedContrast === 4.5 ? '4.5:1' : '3:1'}</h2>
			<p className="m-2">Coming soon.... </p>
    </div>
  )
}

export default FullAccessiblePalette;