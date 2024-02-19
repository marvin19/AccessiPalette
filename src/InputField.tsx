import React from 'react';

interface InputFieldProps {
    id: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField: React.FC<InputFieldProps> = ({ id, value, onChange }) => {
    return (
        <>
            <label className="hex-color-text" htmlFor={id}>
                {' '}
                HEX:
            </label>
            <input
                id={id}
                type="text"
                value={value}
                onChange={onChange}
                name="hexcolor"
                aria-describedby="hexcolorDescription"
            />
        </>
    );
};

export default InputField;
