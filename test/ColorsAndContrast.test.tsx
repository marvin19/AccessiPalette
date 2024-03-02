import { render } from '@testing-library/react';
import ColorAndContrast from '../src/components/ColorAndContrast';
import { renderColorAndContrastBoxes } from '../src/utils';

jest.mock('../src/utils');

describe('ColorAndContrast', () => {
    it('forwards props to renderColorAndContrastBoxes', () => {
        const props = {
            colors: ['#000000', '#ffffff'],
            visibleColors: 2,
            selectedContrast: 4.5,
            paletteType: 'adjacent',
        };

        render(<ColorAndContrast {...props} />);

        expect(renderColorAndContrastBoxes).toHaveBeenCalledWith(
            props.colors,
            props.visibleColors,
            props.selectedContrast,
            props.paletteType,
        );
    });
});
