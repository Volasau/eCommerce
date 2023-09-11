import { countries } from '../../../../data/country';

export function startPostcodeValidation(value: string, errorHTML: HTMLElement, id: string): void {
    const countryInput = document.getElementById(id) as HTMLInputElement;
    countries.forEach((country) => {
        if (value !== '') {
            if (!countryInput.value) errorHTML.textContent = '';
        } else {
            errorHTML.innerHTML = '';
        }
        if (countryInput.value === country.Country) {
            const regex = new RegExp(country.Regex);
            if (regex.test(value)) {
                errorHTML.innerHTML = '';
            } else {
                errorHTML.innerHTML = `*use this format for ${country.Country}:   ${country.Format}`;
            }
        }
    });
}
