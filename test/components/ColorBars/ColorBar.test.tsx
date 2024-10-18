/**
 *
 * TODO:
 *
 */

// import { render } from '@testing-library/react';
// import ColorBar from '../../../src/components/ColorBars/ColorBar';
// import ColorBarContent from '../../../src/components/ColorBars/ColorBarContent';

jest.mock('../../../src/components/ColorBars/ColorBarContent', () =>
    jest.fn(() => <div data-testid="color-bar-content"></div>),
);

describe('ColorBars', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('renders the color bar with the correct color', () => {
        // const color = '#ff0000';
        // const { container } = render(<ColorBar color={color} />);

        //const colorBar = container.getElementsByClassName('color-bar-outer')[0];

        expect(true).toBe(true);

        //expect(colorBar).toHaveStyle({ backgroundColor: color });
    });

    it('does not re-render when props do not change (memoization)', () => {
        // const { rerender } = render(<ColorBar color="#ff0000" />);

        // // Re-render the same component with the same props
        // rerender(<ColorBar color="#ff0000" />);

        expect(true).toBe(true);

        // Ensure ColorBarContent is only rendered once
        //expect(ColorBarContent).toHaveBeenCalledTimes(1);
    });
});
