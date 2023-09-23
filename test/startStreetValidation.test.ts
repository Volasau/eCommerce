import { startStreetValidation } from '../src/pages/logReg/validation/validationFunction/startStreetValidation';

describe('startStreetValidation function', () => {
    it('should clear text of errorHTML when value is not empty', () => {
        const errorHTML = document.createElement('div');
        errorHTML.textContent = 'Error';

        const value = 'Street';
        startStreetValidation(value, errorHTML);

        expect(errorHTML.textContent).toBe('');
    });

    it('should not change text of errorHTML when value is empty', () => {
        const errorHTML = document.createElement('div');
        errorHTML.textContent = 'Error';

        const value = '';
        startStreetValidation(value, errorHTML);

        expect(errorHTML.textContent).toBe('Error');
    });
});
