export function startBirthDateValidation(value: string, errorHTML: HTMLElement): void {
    const today = new Date();
    const controlDate = new Date(today.getFullYear() - 13, today.getMonth(), today.getDate());
    const birthDate = new Date(value);

    if (birthDate > controlDate) {
        errorHTML.style.display = 'block';
        errorHTML.textContent = '*authorization is available only to persons over 13 years of age';
    } else {
        errorHTML.innerHTML = '';
    }
}
