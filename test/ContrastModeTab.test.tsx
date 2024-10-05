import { render, screen } from '@testing-library/react';
import ContrastModeTab from '../src/components/Base/ContrastModeTab';
import useIsDropdown from '../src/hooks/useIsDropdown';
import useTabSelection from '../src/hooks/useTabSelection';

jest.mock('../src/hooks/useIsDropdown');
jest.mock('../src/hooks/useTabSelection');

describe('ContrastModeTab', () => {
    const mockSetSelectedMode = jest.fn();
    // const labels = ['Compare all', 'Only neighbors', 'Find third color'];

    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('renders dropdown when isDropdown is true', () => {
        // Mock the hook to return true for dropdown view
        (useIsDropdown as jest.Mock).mockReturnValue(true);
        (useTabSelection as jest.Mock).mockReturnValue([
            1,
            'neighbor',
            jest.fn(),
        ]);

        render(<ContrastModeTab setSelectedMode={mockSetSelectedMode} />);

        // Ensure dropdown is rendered
        const dropdown = screen.getByRole('combobox');
        expect(dropdown).toBeInTheDocument();
    });

    it('renders tabs when isDropdown is false', () => {});
    it('calls setSelectedMode when selectedMode changes', () => {});
    it('updates selectedMode when a tab is clicked', () => {});
    it('updates selectedMode when a dropdown option is selected', () => {});
});
