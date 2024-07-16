// PaletteHandler.test.tsx
import { render } from '@testing-library/react';
import PaletteHandler from '../src/components/old-components/PaletteHandler';

describe('PaletteHandler', () => {
    it('renders AdjacentPalette with id "Adjacent" when paletteType is "Adjacent"', () => {
        const { container } = render(
            <PaletteHandler
                paletteType="Adjacent"
                colors={['#ffffff', '#000000']}
                selectedContrast={4.5}
                visibleColors={2}
                id="Adjacent"
            />,
        );
        const element = container.querySelector('#Adjacent');
        expect(element).not.toBeNull();
    });

    it('renders FullAccessiblePalette with id "FullAccessible" when paletteType is "FullAccessible"', () => {
        const { container } = render(
            <PaletteHandler
                paletteType="FullAccessible"
                colors={['#ffffff', '#000000']}
                selectedContrast={4.5}
                visibleColors={2}
                id="FullAccessible"
            />,
        );
        const element = container.querySelector('#FullAccessible');
        expect(element).not.toBeNull();
    });

    it('renders FindColor with id "FindColor" when paletteType is "FindColor"', () => {
        const { container } = render(
            <PaletteHandler
                paletteType="FindColor"
                colors={['#ffffff', '#000000']}
                selectedContrast={4.5}
                visibleColors={2}
                id="FindColor"
            />,
        );
        const element = container.querySelector('#FindColor');
        expect(element).not.toBeNull();
    });
});
