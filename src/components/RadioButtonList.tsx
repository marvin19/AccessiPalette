import React from 'react';
import RadioButton from './RadioButton';

interface RadioButtonListProps {
    paletteType: string;
    setPaletteType: (value: string) => void;
}

const RadioButtonList: React.FC<RadioButtonListProps> = ({
    paletteType,
    setPaletteType,
}) => {
    const radioButtons = [
        {
            id: 'adjacent',
            name: 'paletteType',
            value: 'Adjacent',
            label: 'Adjacent Color Palette',
            checked: paletteType === 'Adjacent',
            onChange: () => {
                setPaletteType('Adjacent');
            },
        },
        {
            id: 'fullAccessible',
            name: 'paletteType',
            value: 'FullAccessible',
            label: 'Full Accessible Color Palette',
            checked: paletteType === 'FullAccessible',
            onChange: () => {
                setPaletteType('FullAccessible');
            },
        },
        {
            id: 'backgroundColor',
            name: 'paletteType',
            value: 'BackgroundColor',
            label: 'Background Color Palette',
            checked: paletteType === 'BackgroundColor',
            onChange: () => {
                setPaletteType('BackgroundColor');
            },
        },
    ];

    return (
        <>
            {radioButtons.map((button) => (
                <RadioButton
                    key={button.id}
                    id={button.id}
                    name="paletteType"
                    value={button.value}
                    label={button.label}
                    checked={paletteType === button.value}
                    onChange={() => {
                        setPaletteType(button.value);
                    }}
                />
            ))}
        </>
    );
};

export default RadioButtonList;
