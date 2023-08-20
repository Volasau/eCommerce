export interface IFunc {
    (checkbox: HTMLInputElement, pswInput: HTMLElement): void;
}

export const makeVisiblePassword: IFunc = function (checkbox: HTMLInputElement, pswInput: HTMLElement) {
    const passwordInput = pswInput as HTMLInputElement;
    checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
            passwordInput.type = 'text';
        } else {
            passwordInput.type = 'password';
        }
    });
};
