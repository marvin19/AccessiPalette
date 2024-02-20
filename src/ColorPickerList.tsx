import { FaArrowsUpDown } from 'react-icons/fa6';
import React, { useState } from 'react';
import ColorPicker from './ColorPicker';
import ColorText from './ColorText';

interface ColorPickerListProps {
    colors: string[];
    visibleColors: number;
    handleColorChange: (newColors: string[]) => void;
    checked: boolean;
}

const ColorPickerList: React.FC<ColorPickerListProps> = ({
    colors,
    handleColorChange,
    visibleColors,
    checked,
}) => {
    const [message, setMessage] = useState('');

    const onColorChange = (newColor: string, index: number): void => {
        const updatedColors = [...colors];
        updatedColors[index] = newColor;
        handleColorChange(updatedColors);
    };

    const switchColors = (event: React.MouseEvent<HTMLButtonElement>): void => {
        const index = Number(
            (event.target as Element).getAttribute('data-index'),
        );
        const updatedColors = [...colors];
        [updatedColors[index], updatedColors[index + 1]] = [
            updatedColors[index + 1],
            updatedColors[index],
        ];
        handleColorChange(updatedColors);
        setMessage('The order of the colors has been switched');
    };

    return (
        <div>
            <ul>
                {colors.slice(0, visibleColors).map((color, index) => (
                    <React.Fragment key={index}>
                        {/* Conditionally render the switch button inside an <li> */}
                        {checked && index !== 0 && (
                            <li className="reorder-button flex justify-center">
                                <button
                                    className="bg-blue-700 text-white my-3 px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 flex items-center justify-center"
                                    data-index={index - 1}
                                    onClick={switchColors}
                                >
                                    <FaArrowsUpDown /> Switch order
                                </button>
                            </li>
                        )}
                        <li className="color-pickers">
                            <>
                                <ColorText
                                    color={color}
                                    onColorChange={(newColor) => {
                                        onColorChange(newColor, index);
                                    }}
                                />
                                <ColorPicker
                                    color={color}
                                    onColorChange={(newColor) => {
                                        onColorChange(newColor, index);
                                    }}
                                />
                            </>
                        </li>
                    </React.Fragment>
                ))}
            </ul>
            <div aria-live="polite" className="visually-hidden">
                {message}
            </div>
        </div>
    );
};

export default ColorPickerList;
