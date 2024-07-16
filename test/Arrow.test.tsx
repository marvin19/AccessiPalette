import { render } from '@testing-library/react';
import Arrow from '../src/components/old-components/Arrow';

jest.mock('@fortawesome/react-fontawesome', () => ({
    FontAwesomeIcon: jest.fn(() => <div>Mock Icon</div>),
}));

describe('Arrow', () => {
    it('renders the correct icon for the right direction', () => {
        const { getByText } = render(<Arrow direction="right" />);
        expect(getByText('Mock Icon')).toBeInTheDocument();
    });
});
