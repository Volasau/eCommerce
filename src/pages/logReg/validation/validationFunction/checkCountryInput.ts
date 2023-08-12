import { countries } from '../../../../data/country';

export function checkCountryInput(target: HTMLInputElement, errorHTML: HTMLElement) {
    let countryValid = false;
    if (target.value === '') {
        console.log(1);
        errorHTML.innerHTML = '';
    } else {
        countries.forEach((country) => {
            if (target.value.toLocaleLowerCase() === country.Country.toLocaleLowerCase()) {
                target.value = country.Country;
                countryValid = true;
                const list = document.getElementById('country-list') as HTMLElement;
                list.innerHTML = '';
            }
        });
        errorHTML.innerHTML = countryValid ? '' : '*this country does not exist';
    }
}
