import { render } from '@testing-library/react';
//import { userEvent } from '@testing-library/user-event';
import RadioButton from '../src/components/RadioButton';

const setup = () => {
    const id = 'adjacent';
    const name = 'paletteType';
    const value = 'Adjacent';
    const label = 'Adjacent Color Palette';
    const checked = true;
    const onChange = jest.fn((_: React.ChangeEvent<HTMLInputElement>) => {});
    const utils = render(
        <RadioButton
            id={id}
            name={name}
            value={value}
            label={label}
            checked={checked}
            onChange={onChange}
        />,
    );
    const radioButton = utils.getByLabelText(label);
    return {
        id,
        name,
        value,
        label,
        checked,
        onChange,
        radioButton,
        ...utils,
    };
};

describe('render radio button', () => {
    test('should render a radio button', () => {
        const { radioButton } = setup();
        expect(radioButton).toBeInTheDocument();
    });

    test.todo(
        'should call the onChange function when the radio button is clicked',
    );
    /*() => {
            const { radioButton, onChange } = setup();
            userEvent.click(radioButton);
            expect(onChange).toHaveBeenCalled();
        },*/
});
