import ContrastText from '../../../src/components/Base/ContrastText';
import { render, screen } from '@testing-library/react';
import { calculateContrastRatio } from '../../../src/utils';

jest.mock('../../../src/utils', () => ({
    calculateContrastRatio: jest.fn(),
}));

describe('ContrastText', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('renders the contrast ratio and text label', () => {
        // Mock contrast ratio calculation
        (calculateContrastRatio as jest.Mock).mockReturnValue(4.5);

        // Render component with color and textColor props
        render(<ContrastText textColor="#000000" contrastRatio="4.50" />);

        // Check if the correct contrast ratio is displayed
        const contrastText = screen.getByText('4.50:1');
        expect(contrastText).toBeInTheDocument();

        // Check if the label is displayed
        const label = screen.getByText('Text Contrast Ratio');
        expect(label).toBeInTheDocument();
    });

    it('applies the correct text color to botn the contrast ratio and label', () => {
        // Mock the contrast ratio calculation
        (calculateContrastRatio as jest.Mock).mockReturnValue(3.0);

        // Render component with specific color and textColor props
        render(<ContrastText textColor="#ff0000" contrastRatio="3.00" />);

        // Check if the contrast ratio text is styled with correct textColor
        const contrastText = screen.getByText('3.00:1');
        expect(contrastText).toHaveStyle('color: #ff0000');

        // Check if the label "Text Contrast Ratio" is styled with correct textColor
        const label = screen.getByText('Text Contrast Ratio');
        expect(label).toHaveStyle('color: #ff0000');
    });
});
