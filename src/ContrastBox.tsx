import React from 'react'
import SmallColorBox from './SmallColorBox';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft, faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { calculateContrastRatio } from './utils';

type ContrastBoxProps = {
    leftColor: string;
    rightColor: string;
}

const WCAG_TEXT_CONTRAST_THRESHOLD = 4.5;
const WCAG_GRAPHIC_CONTRAST_THRESHOLD = 3; // TODO: Add graphic contrast ratio

const ContrastBox: React.FC<ContrastBoxProps> = ({leftColor, rightColor}) => {

    const contrastRatio = calculateContrastRatio(leftColor, rightColor);
    const meetsWCAGtext = contrastRatio >= WCAG_TEXT_CONTRAST_THRESHOLD;

    return (
        <div className="contrast-box">
            <FontAwesomeIcon icon ={faArrowLeft} />
                <div className={`inner-contrast-box ${meetsWCAGtext ? 'passes-border' : 'fails-border'}`}>
                    <p className="contrast-text">
                        <b>Contrast Ratio</b> 
                    </p>
                    <p className="contrast-text contrast-ratio"> 
                        {`${contrastRatio.toFixed(2)}:1`} 
                    </p>
                    <div className="check-text">
                        {meetsWCAGtext ?
                            <p className='passes'><FontAwesomeIcon icon={faCheckCircle} style={{color: '#0f8548'}} /><b> Passes!</b></p> :
                            <p className='fails'><FontAwesomeIcon icon={faTimesCircle} style={{color: '#b51717'}} /><b> Fails!</b></p>}
                    </div>
                </div>
            <FontAwesomeIcon icon={faArrowRight} />
        </div>
      )
}

export default ContrastBox;

