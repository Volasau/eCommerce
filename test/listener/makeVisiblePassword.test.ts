import { makeVisiblePassword } from '../../src/pages/logReg/utils/makeVisiblePassword.utils';
import { fireEvent } from '@testing-library/dom';

describe('makeVisiblePassword function', () => {
    it('should toggle the input type between password and text when checkbox is checked', () => {
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        const passwordInput = document.createElement('input');
        passwordInput.type = 'password';

        makeVisiblePassword(checkbox, passwordInput);

        expect(passwordInput.type).toBe('password');

        fireEvent.change(checkbox, { target: { checked: true } });

        expect(passwordInput.type).toBe('text');

        fireEvent.change(checkbox, { target: { checked: false } });

        expect(passwordInput.type).toBe('password');
    });
});
