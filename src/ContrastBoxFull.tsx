/*import React from 'react'
import SmallColorBox from './SmallColorBox';

const WCAG_TEXT_CONTRAST_THRESHOLD = 4.5;

type ContrastBoxFullProps = {
    color: string;
    contrastRatios: number[];
    colors: string[];
  }
  
  const ContrastBoxFull: React.FC<ContrastBoxFullProps> = ({color, contrastRatios, colors}) => {
    const meetsWCAG = contrastRatios.every((ratio) => ratio >= WCAG_TEXT_CONTRAST_THRESHOLD);
  
    return (
      <div className="contrast-box-full">
        {contrastRatios.map((ratio, index) => (
          <div key={index}>
            <SmallColorBox color={color[index]} />
            <p>Contrast Ratio with {color}: {ratio.toFixed(2)}</p>
          </div>
        ))}
        <p>Color: {color}</p>
        {meetsWCAG ? <p>Passes!</p> : <p>Fails!</p>}
      </div>
    );
  }

export default ContrastBoxFull*/