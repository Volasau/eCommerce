import { countries } from '../../../../../data/country';

export function checkCountryInput(target: HTMLInputElement, errorHTML: HTMLElement): void {
    let countryValid = false;
    if (target.value === '') {
        errorHTML.innerHTML = '';
    } else {
        countries.forEach((country) => {
            if (target.value.toLocaleLowerCase() === country.Country.toLocaleLowerCase()) {
                target.value = country.Country;
                countryValid = true;
                const list = document.getElementById(target.id) as HTMLElement;
                list.innerHTML = '';
            }
        });
        errorHTML.innerHTML = countryValid ? '' : '*this country does not exist';
    }
}
