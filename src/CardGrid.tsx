import React, { useState, useEffect } from 'react';
import ColorSelect from './ColorSelect';
import ContrastSelect from './ContrastSelect';
import ColorPickerList from './ColorPickerList'
import {
  generateAdditionalColors,
  renderColorAndContrastBoxes
} from './utils';

const CardGrid: React.FC = () => {

  // You need to have two colors to check contrast
  const [selectedOption, setSelectedOption] = useState(2);
  const [selectedContrast, setSelectedContrast] = useState(4.5);
  const [colors, setColors] = useState<string[]>([]);
  const [visibleColors, setVisibleColors] = useState<number>(0);

  const handleColorChange = (newColors: string[]) => {
    setColors(newColors);
  }

  const handleGeneratePalette = (): void => {
    const newColors = generateAdditionalColors(visibleColors)
    setColors(newColors);
  }

  useEffect(() => {
    if (selectedOption > colors.length){
      // If selectedOption increases, generate new colors for the additional color pickers
      const additionalColors = generateAdditionalColors(selectedOption - colors.length);
      setColors(prevColors => [...prevColors, ...additionalColors]);
    }
    setVisibleColors(selectedOption);
  }, [selectedOption]);

  return (
    <div className="container">
        <div className="card">
            <h2>How many colors?</h2>
            <ColorSelect selectedOption={selectedOption} setSelectedOption={setSelectedOption}/>
            <h2>What contrast ratio?</h2>
            <ContrastSelect selectedContrast={selectedContrast} setSelectedContrast={setSelectedContrast} />
        </div>
        <div className="card">
            <h2>Which colors?</h2>
            <ColorPickerList
              colors={colors}
              handleColorChange={handleColorChange}
              visibleColors={visibleColors}
			      />
            <button className="btn" onClick={handleGeneratePalette}>Generate random colors again</button>
        </div>
        <div className="card">
            <h2>The Adjacent Color palette with contrast {selectedContrast === 4.5 ? '4.5:1' : '3:1'}</h2>
			<p>This section checks contrast between adjacent colors for clear visualization if stacking colors in e.g charts. <strong>Non-adjacent colors are not compared</strong></p>
      <p>If you want to keep a color in your color palette, but the neighbor color has not enough contrast. Try drag and drop in section 2.</p>
			<div className="color-box-container">
            	{renderColorAndContrastBoxes(colors, visibleColors, selectedContrast)}
			</div>
        </div>
    </div>
  )
}

export default CardGrid;