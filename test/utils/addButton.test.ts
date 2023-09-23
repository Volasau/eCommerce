import { addButton } from '../../src/pages/logReg/utils/addButton.utils';

describe('addButton function', () => {
    it('should add a Login button when innerFormList has 2 or fewer elements', () => {
        const formHTML = document.createElement('form');
        const innerFormList = [document.createElement('div'), document.createElement('div')];

        addButton(formHTML, innerFormList);

        const loginButton = formHTML.querySelector('#login-submit');
        expect(loginButton).not.toBeNull();
        expect(loginButton!.textContent).toBe('LogIn');
        expect(loginButton!.getAttribute('type')).toBe('button');
    });

    it('should add a Register button when innerFormList has more than 2 elements', () => {
        const formHTML = document.createElement('form');
        const innerFormList = [
            document.createElement('div'),
            document.createElement('div'),
            document.createElement('div'),
        ];

        addButton(formHTML, innerFormList);

        const registerButton = formHTML.querySelector('#registr-submit');
        expect(registerButton).not.toBeNull();
        expect(registerButton!.textContent).toBe('Register');
        expect(registerButton!.getAttribute('type')).toBe('button');
    });
});
