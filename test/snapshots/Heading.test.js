import React from 'react';
import { render } from '@testing-library/react';
import Heading from '../../src/components/Heading'; // Adjust the import path as necessary

describe('Heading Component', () => {
    it('renders correctly and matches snapshot', () => {
        const { asFragment } = render(<Heading />);
        expect(asFragment()).toMatchSnapshot();
    });
});
