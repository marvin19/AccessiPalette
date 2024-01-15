import React, { useState, useEffect } from 'react';
import AdjacentPalette from './AdjacentPalette';
import ColorSelect from './ColorSelect';
import ContrastSelect from './ContrastSelect';
import ColorPickerList from './ColorPickerList'
import {
  generateAdditionalColors
} from './utils';
import FullAccessiblePalette from './FullAccessisblePalette';

const CardGrid: React.FC = () => {

  // You need to have two colors to check contrast
  const [selectedOption, setSelectedOption] = useState(2);
  const [selectedContrast, setSelectedContrast] = useState(4.5);
  const [colors, setColors] = useState<string[]>([]);
  const [visibleColors, setVisibleColors] = useState<number>(0);
  const [paletteType, setPaletteType] = useState('Adjacent');

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
          <h2>Palette Type</h2>
          <div className="copy">
            <p>Choose the type of color palette to generate.</p>
            <p>The 'Adjacent Color Palette' focuses on contrast between neighboring colors, ideal for visualizations where colors are used side by side.</p> 
            <p>The 'Full Accessible Color Palette' checks contrast accross all color combinations, ensuring accessibility and readability in more complex color schemes. Your selection will dynamically update the palette displayed below.</p>
          </div>
          <div className="radio-container">
            <input
                type="radio"
                id="adjacent"
                name="paletteType"
                value="Adjacent"
                checked={paletteType === 'Adjacent'}
                onChange={() => setPaletteType('Adjacent')}
            />
            <label htmlFor="adjacent">Adjacent Color Palette</label>
        </div>
        <div className="radio-container">
            <input
                type="radio"
                id="fullAccessible"
                name="paletteType"
                value="FullAccessible"
                checked={paletteType === 'FullAccessible'}
                onChange={() => setPaletteType('FullAccessible')}
            />
            <label htmlFor="fullAccessible">Full Accessible Color Palette</label>
        </div>
      </div>
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
            {paletteType === 'Adjacent' ?  
              <AdjacentPalette colors={colors} selectedContrast={selectedContrast} visibleColors={visibleColors} paletteType={'Adjacent'}/> :
              <FullAccessiblePalette colors={colors} selectedContrast={selectedContrast} visibleColors={visibleColors} paletteType={'FullAccessible'}/>  
            }
        </div>
    </div>
  )
}

export default CardGrid;