import { render, screen, fireEvent } from '@testing-library/react';
import ContrastSelectTab from '../../../src/components/Base/ContrastSelectTab';
import useIsDropdown from '../../../src/hooks/useIsDropdown';
import useContrastSelection from '../../../src/hooks/useContrastSelection';

jest.mock('../../../src/hooks/useIsDropdown');
jest.mock('../../../src/hooks/useContrastSelection');

describe('ContrastSelectTab', () => {
    const mockSetSelectedMode = jest.fn();
    const labels = ['Level AAA (7:1)', 'Level AA (4.5:1)', 'Level A (3:1)'];

    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('renders dropdown when isDropdown is true', () => {
        // Mock the hook to return true for dropdown view
        (useIsDropdown as jest.Mock).mockReturnValue(true);
        (useContrastSelection as jest.Mock).mockReturnValue([1, 7, jest.fn()]);

        render(<ContrastSelectTab setSelectedContrast={mockSetSelectedMode} />);

        // Ensure dropdown is rendered
        const dropdown = screen.getByRole('combobox');
        expect(dropdown).toBeInTheDocument();
    });

    it('renders tabs when isDropdown is false', () => {
        // Mock the hook to return false for tabs view
        (useIsDropdown as jest.Mock).mockReturnValue(false);
        (useContrastSelection as jest.Mock).mockReturnValue([1, 7, jest.fn()]);

        render(<ContrastSelectTab setSelectedContrast={mockSetSelectedMode} />);

        // Ensure tabs are rendered
        const tablist = screen.getByRole('tablist');
        expect(tablist).toBeInTheDocument();

        // Ensure the correct number of tabs
        const tabs = screen.getAllByRole('tab');
        expect(tabs).toHaveLength(labels.length);

        // Ensure tab labels are correct
        labels.forEach((label) => {
            expect(screen.getByText(label)).toBeInTheDocument();
        });
    });

    it('calls setSelectedMode when selectedMode changes', () => {
        const handleTabSelect = jest.fn();
        (useIsDropdown as jest.Mock).mockReturnValue(false);
        (useContrastSelection as jest.Mock).mockReturnValue([
            0,
            3,
            handleTabSelect,
        ]);

        render(<ContrastSelectTab setSelectedContrast={mockSetSelectedMode} />);

        // Click the second tab
        const secondTab = screen.getAllByRole('tab')[1];
        fireEvent.click(secondTab);

        // Ensure the tab select function is called
        expect(handleTabSelect).toHaveBeenCalledWith(1);
    });
    it('updated selectedMode when a tab is clicked', () => {
        const handleTabSelect = jest.fn();
        (useIsDropdown as jest.Mock).mockReturnValue(false);
        (useContrastSelection as jest.Mock).mockReturnValue([
            0,
            3,
            handleTabSelect,
        ]);

        render(<ContrastSelectTab setSelectedContrast={mockSetSelectedMode} />);

        // Click the second tab
        const secondTab = screen.getAllByRole('tab')[1];
        fireEvent.click(secondTab);

        // Ensure the tab select function is called
        expect(handleTabSelect).toHaveBeenCalledWith(1);
    });
    it('updates selectedMode when a dropdown option is selected', () => {
        const handleTabSelect = jest.fn();
        (useIsDropdown as jest.Mock).mockReturnValue(true);
        (useContrastSelection as jest.Mock).mockReturnValue([
            2,
            4.5,
            handleTabSelect,
        ]);

        render(<ContrastSelectTab setSelectedContrast={mockSetSelectedMode} />);

        // Select contrast level 4.5
        const dropdown = screen.getByRole('combobox');
        fireEvent.change(dropdown, { target: { value: '2' } });

        expect(handleTabSelect).toHaveBeenCalledWith(2);
    });
});
