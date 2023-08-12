export function startNameValidation(value: string, errorHTML: HTMLElement) {
    if (value === '') {
        errorHTML.textContent = '';
    } else if (/(?=.*[!@#$%^&*])/.test(value)) {
        errorHTML.textContent = '*the field must not contain special characters';
    } else if (/(?=.*[0-9])/.test(value)) {
        errorHTML.textContent = '*the field must not contain digits';
    } else {
        errorHTML.innerHTML = '';
    }
}
