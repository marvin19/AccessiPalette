import { render } from '@testing-library/react';
import ColorAndContrast from '../src/components/old-components/ColorAndContrast';
import { renderColorAndContrastBoxes } from '../src/utils';
import { axe, toHaveNoViolations } from 'jest-axe';

jest.mock('../src/utils');

// Extend expect to have no violations
expect.extend(toHaveNoViolations);

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
    it('should have no accessibility violations', async () => {
        const props = {
            colors: ['#000000', '#0000ff'],
            visibleColors: 2,
            selectedContrast: 4.5,
            paletteType: 'adjacent',
        };

        const { container } = render(<ColorAndContrast {...props} />);
        const results = await axe(container);
        expect(results).toHaveNoViolations();
    });
});
