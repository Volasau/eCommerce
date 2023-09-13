import { startEmailValidation } from '../src/pages/logReg/validation/validationFunction/startEmailValidation';

describe('startEmailValidation', () => {
    let errorElement: HTMLDivElement;

    beforeEach(() => {
        errorElement = document.createElement('div');
    });

    it('should clear error for empty email', () => {
        startEmailValidation('', errorElement);
        expect(errorElement.textContent).toBe('');
    });

    it('should display error for email with spaces at the beginning or end', () => {
        startEmailValidation(' example@example.com ', errorElement);
        expect(errorElement.textContent).toBe('*there should be no spaces at the beginning and at the end');
    });

    it('should display error for email without "@" symbol', () => {
        startEmailValidation('example.com', errorElement);
        expect(errorElement.textContent).toBe('*the e-mail must contain the @ symbol');
    });

    it('should display error for email with "@" but without "." in the domain', () => {
        startEmailValidation('example@com', errorElement);
        expect(errorElement.textContent).toBe('*the domain name must contain the dot(".") For example gmail.com');
    });

    it('should display error for email with "@" but domain starts with a dot', () => {
        startEmailValidation('example@.com', errorElement);
        expect(errorElement.textContent).toBe('*the domain name must not start with the dot(".")');
    });

    it('should display error for email with "@" but domain contains spaces', () => {
        startEmailValidation('example@dom ain.com', errorElement);
        expect(errorElement.textContent).toBe('*the domain name must not contain spaces');
    });

    it('should display error for email with multiple "@" symbols', () => {
        startEmailValidation('example@domain@com', errorElement);
        expect(errorElement.textContent).toBe('*must be only one symbol @');
    });

    it('should display error for email with specific symbols in the domain', () => {
        startEmailValidation('example@domain!com', errorElement);
        expect(errorElement.textContent).toBe('*the domain name must not contain specific symbols(!#$%^&*)');
    });

    it('should display error for email with domain finishing with a dot', () => {
        startEmailValidation('example@gmail.com.', errorElement);
        expect(errorElement.textContent).toBe('*the domain name must not finish with the dot(".")');
    });

    it('should clear error for valid email', () => {
        startEmailValidation('example@gmail.com', errorElement);
        expect(errorElement.innerHTML).toBe('');
    });
});
