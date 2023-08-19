export interface IFunc {
    (checkbox: HTMLInputElement, passwordInput: HTMLInputElement): void;
}

export const makeVisiblePassword: IFunc = function (checkbox: HTMLInputElement, passwordInput: HTMLInputElement) {
    checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
            passwordInput.type = 'text';
        } else {
            passwordInput.type = 'password';
        }
    });
};
