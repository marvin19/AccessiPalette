import React from 'react';

interface RadioButtonProps {
    id: string;
    name: string;
    value: string;
    label: string;
    checked: boolean;
    onChange: () => void;
}

const RadioButton: React.FC<RadioButtonProps> = ({
    id,
    name,
    value,
    label,
    checked,
    onChange,
}) => {
    return (
        <div className="radio-container">
            <input
                type="radio"
                id={id}
                name={name}
                value={value}
                checked={checked}
                onChange={onChange}
            />
            <label htmlFor={id}>{label}</label>
        </div>
    );
};

export default RadioButton;
