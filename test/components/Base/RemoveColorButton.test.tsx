import RemoveColorButton from '../../../src/components/Base/RemoveColorButton';
import { render, fireEvent } from '@testing-library/react';

describe('RemoveColorButton', () => {
    it('removeColorButton is rendered', () => {
        const removeColorBar = jest.fn();

        const { container } = render(
            <RemoveColorButton
                textColor="#000000"
                removeColorBar={removeColorBar}
            />,
        );

        const button = container.querySelector('.remove-color');
        expect(button).toBeInTheDocument();
    });

    it('calls remove color bar function when button is clicked', () => {
        const removeColorBar = jest.fn();

        const { container } = render(
            <RemoveColorButton
                textColor="#000000"
                removeColorBar={removeColorBar}
            />,
        );

        const button = container.getElementsByClassName('remove-color')[0];
        fireEvent.click(button);

        // Ensure removeColorBar is called
        expect(removeColorBar).toHaveBeenCalledTimes(1);
    });
});
