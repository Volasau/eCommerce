import { startPasswordValidation } from '../src/pages/logReg/validation/validationFunction/startPasswordValidation';

describe('startPasswordValidation', () => {
    let errorElement: HTMLDivElement;

    beforeEach(() => {
        errorElement = document.createElement('div');
    });

    it('should clear error for empty password', () => {
        startPasswordValidation('', errorElement);
        expect(errorElement.textContent).toBe('');
    });

    it('should display error for password with less than 8 characters', () => {
        startPasswordValidation('Abc12', errorElement);
        expect(errorElement.textContent).toBe('*the password must contain at least 8 symbols');
    });

    it('should display error for password without a number', () => {
        startPasswordValidation('Abcdefgh', errorElement);
        expect(errorElement.textContent).toBe('*the password must contain at least one number');
    });

    it('should display error for password without a capital letter', () => {
        startPasswordValidation('abcdefgh1', errorElement);
        expect(errorElement.textContent).toBe('*the password must contain at least one capital letter');
    });

    it('should display error for password without a lowercase letter', () => {
        startPasswordValidation('ABCDEFGH1', errorElement);
        expect(errorElement.textContent).toBe('*the password must contain at least one lowercase letter');
    });

    it('should display error for password without a special symbol', () => {
        startPasswordValidation('Abcdefgh1', errorElement);
        expect(errorElement.textContent).toBe('*the password must contain at least one special symbol');
    });

    it('should display error for password with spaces at the beginning or end', () => {
        startPasswordValidation(' Abcdefgh12! ', errorElement);
        expect(errorElement.textContent).toBe('*there should be no spaces at the beginning and at the end');
    });

    it('should clear error for valid password', () => {
        startPasswordValidation('Abcd123!', errorElement);
        expect(errorElement.innerHTML).toBe('');
    });
});
