import { makeVisiblePassword } from '../src/pages/logReg/functions/makeVisiblePassword';

describe('makeVisiblePassword', () => {
    let checkbox: HTMLInputElement;
    let passwordInput: HTMLInputElement;

    beforeEach(() => {
        checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        passwordInput = document.createElement('input');
        passwordInput.type = 'password';
    });

    it('should make password visible when checkbox is checked', () => {
        const changeEvent = new Event('change');
        checkbox.checked = true;
        makeVisiblePassword(checkbox, passwordInput);
        checkbox.dispatchEvent(changeEvent);
        expect(passwordInput.type).toBe('text');
    });

    it('should make password hidden when checkbox is unchecked', () => {
        const changeEvent = new Event('change');
        checkbox.checked = false;
        makeVisiblePassword(checkbox, passwordInput);
        checkbox.dispatchEvent(changeEvent);
        expect(passwordInput.type).toBe('password');
    });
});
