export function makeVisiblePassword(checkbox: HTMLInputElement, pswInput: HTMLElement): void {
    const passwordInput = pswInput as HTMLInputElement;
    checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
            passwordInput.type = 'text';
        } else {
            passwordInput.type = 'password';
        }
    });
}
