import ContrastText from '../../../src/components/Base/ContrastText';
import { render, screen } from '@testing-library/react';
import { getWCAGLevel } from '../../../src/utils';

jest.mock('../../../src/utils', () => ({
    getWCAGLevel: jest.fn(),
}));

describe('ContrastText', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('renders the contrast ratio and text label', () => {
        // Mock contrast ratio calculation
        (getWCAGLevel as jest.Mock).mockReturnValue({ level: 'AA' });

        // Render component with color and textColor props
        render(
            <ContrastText
                textColor="#000000"
                textContrastRatio={4.5}
                selectedContrast={4.5}
            />,
        );

        // Check if the correct contrast ratio is displayed
        // TODO: Fix correct handling of doubles
        const contrastText = screen.getByText('4.5:1 (AA)');
        expect(contrastText).toBeInTheDocument();

        // Check if the label is displayed
        const label = screen.getByText('Text Contrast Ratio');
        expect(label).toBeInTheDocument();
    });

    it('applies the correct text color to botn the contrast ratio and label', () => {
        // Mock the contrast ratio calculation
        (getWCAGLevel as jest.Mock).mockReturnValue({ level: 'AAA' });

        // Render component with specific color and textColor props
        render(
            <ContrastText
                textColor="#ff0000"
                textContrastRatio={3.0}
                selectedContrast={3.0}
            />,
        );

        // Check if the contrast ratio text is styled with correct textColor
        const contrastText = screen.getByText('3:1 (AAA)');
        expect(contrastText).toHaveStyle('color: #ff0000');

        // Check if the label "Text Contrast Ratio" is styled with correct textColor
        const label = screen.getByText('Text Contrast Ratio');
        expect(label).toHaveStyle('color: #ff0000');
    });

    it('displays "N/A" when textContrastRatio is 0', () => {
        // Mock the contrast ratio calculation
        (getWCAGLevel as jest.Mock).mockReturnValue({ level: 'AAA' });

        // Render component with specific color and textColor props
        render(
            <ContrastText
                textColor="#ff0000"
                textContrastRatio={0}
                selectedContrast={3.0}
            />,
        );

        // Check if the contrast ratio text is "N/A"
        const contrastText = screen.getByText('N/A');
        expect(contrastText).toBeInTheDocument();
    });
});
