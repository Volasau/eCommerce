export function startEmailValidation(value: string, errorHTML: HTMLElement) {
    if (value === '') {
        errorHTML.textContent = '';
    } else if (value[0] === ' ' || value.at(-1) === ' ') {
        errorHTML.textContent = '*there should be no spaces at the beginning and at the end';
    } else if (!value.includes('@')) {
        errorHTML.textContent = '*the e-mail must contain the @ symbol';
    } else {
        if (value.split('@')[1][0] === '.') {
            errorHTML.textContent = '*the domain name must not start with the dot(".")';
        } else if (value.split('@')[1].includes(' ')) {
            errorHTML.textContent = '*the domain name must not contain spaces';
        } else if (value.split('@').length > 2) {
            errorHTML.textContent = '*must be only one symbol @';
        } else if (/(?=.*[!#$%^&*])/.test(value)) {
            errorHTML.textContent = '*the domain name must not contain specific symbols(!#$%^&*)';
        } else if (!value.split('@')[1].includes('.')) {
            errorHTML.textContent = '*the domain name must contain the dot(".") For example gmail.com';
        } else if (value.at(-1) === '.') {
            errorHTML.textContent = '*the domain name must not finish with the dot(".")';
        } else {
            errorHTML.innerHTML = '';
        }
    }
}
