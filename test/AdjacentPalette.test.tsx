import { render } from '@testing-library/react';
import AdjacentPalette from '../src/components/AdjacentPalette';

describe('AdjacentPalette', () => {
    it('renders the correct title and contrast ratio', () => {
        const { getByText } = render(
            <AdjacentPalette
                selectedContrast={4.5}
                colors={[]}
                visibleColors={0}
                paletteType="adjacent"
                id="Adjacent"
            />,
        );
        expect(getByText('The Adjacent Color palette with contrast 4.5:1'));
    });
});
