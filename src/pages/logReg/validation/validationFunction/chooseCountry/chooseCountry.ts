import { ICountry } from '../../../../../core/interfaces/countyInterface';
import { countries } from '../../../../../data/country';
import { chooseFromCountryList } from './chooseFromCountryList';
import { getCountryListHTML } from './getListHTML';

export function chooseCountry(target: HTMLInputElement, errorHTML: HTMLElement) {
    if (target.id === 'country') {
        const list = document.getElementById('country-list') as HTMLElement;
        const countryInput = document.getElementById('country') as HTMLInputElement;
        const postCodeHTML = document.getElementById('postcode') as HTMLInputElement;

        if (countryInput.value === '') postCodeHTML.setAttribute('placeholder', 'Enter the postcode');

        let countriesArr = countries.filter((country: ICountry) => {
            const regex = new RegExp(`^${target.value}`, 'gi');
            return country.Country.match(regex);
        });

        if (target.value.length === 0) {
            countriesArr = [];
            list.innerHTML = '';
        }

        getCountryListHTML(countriesArr);

        chooseFromCountryList(countryInput, list, postCodeHTML, errorHTML);
    }
}
