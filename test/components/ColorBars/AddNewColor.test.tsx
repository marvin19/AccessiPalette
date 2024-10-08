import AddNewColor from '../../../src/components/ColorBars/AddNewColor';
import { render, screen, fireEvent } from '@testing-library/react';

describe('AddNewColor', () => {
    it('add color button is rendered', () => {
        const addColorBar = jest.fn();

        render(<AddNewColor addColorBar={addColorBar} colorBars={[]} />);

        const button = screen.getByText('+ Add color');
        expect(button).toBeInTheDocument();
    });

    it('calls add color bar function when button is clicked', () => {
        const addColorBar = jest.fn();

        render(<AddNewColor addColorBar={addColorBar} colorBars={[]} />);

        const button = screen.getByText('+ Add color');
        fireEvent.click(button);

        expect(addColorBar).toHaveBeenCalledTimes(1);
    });
});
