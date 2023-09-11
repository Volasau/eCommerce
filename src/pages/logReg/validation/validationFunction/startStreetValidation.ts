export function startStreetValidation(value: string, errorHTML: HTMLElement): void {
    if (value !== '') {
        errorHTML.textContent = '';
    }
}
