import React, { useState } from 'react';
import ColorSelect from './ColorSelect';
import ContrastSelect from './ContrastSelect';
import ColorPickerList from './ColorPickerList'

type CardGridProps = {
    colors: string[];
    setColors: (colors: string[]) => void;
}

const CardGrid: React.FC<CardGridProps> = () => {

  // You need to have two colors to check contrast
  const [selectedOption, setSelectedOption] = useState(2);
  const [selectedContrast, setSelectedContrast] = useState(0);


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
            <ColorPickerList selectedOption={selectedOption} />
        </div>
        <div className="card">
            <h2>The palette</h2>
        </div>
    </div>
  )
}

export default CardGrid