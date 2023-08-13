import { countries } from '../../../../data/country';

export function startPostcodeValidation(value: string, errorHTML: HTMLElement) {
    const countryInput = document.getElementById('country') as HTMLInputElement;
    countries.forEach((country) => {
        if (countryInput.value === country.Country) {
            const regex = new RegExp(country.Regex);
            if (regex.test(value)) {
                errorHTML.innerHTML = '';
            } else {
                errorHTML.innerHTML = `*use this format for ${country.Country}:   ${country.Format}`;
            }
        }
        if (value === '') {
            errorHTML.innerHTML = '';
        }
    });
}