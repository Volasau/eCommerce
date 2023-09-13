export function startPasswordValidation(value: string, errorHTML: HTMLElement): void {
    if (value === '') {
        errorHTML.textContent = '';
    } else if (value.length < 8) {
        errorHTML.textContent = '*the password must contain at least 8 symbols';
    } else if (!/(?=.*[0-9])/.test(value)) {
        errorHTML.textContent = '*the password must contain at least one number';
    } else if (!/(?=.*[A-Z])/.test(value)) {
        errorHTML.textContent = '*the password must contain at least one capital letter';
    } else if (!/(?=.*[a-z])/.test(value)) {
        errorHTML.textContent = '*the password must contain at least one lowercase letter';
    } else if (!/(?=.*[!@#$%^&*])/.test(value)) {
        errorHTML.textContent = '*the password must contain at least one special symbol';
    } else if (value[0] === ' ' || value.at(-1) === ' ') {
        errorHTML.textContent = '*there should be no spaces at the beginning and at the end';
    } else {
        errorHTML.innerHTML = '';
    }
}
