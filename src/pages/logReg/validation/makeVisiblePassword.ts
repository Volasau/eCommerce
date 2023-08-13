export function makeVisiblePassword(checkbox: HTMLInputElement, passwordInput: HTMLInputElement) {
    checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
            passwordInput.type = 'text';
        } else {
            passwordInput.type = 'password';
        }
    });
}
