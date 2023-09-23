import { ICountryProp } from '../../../../../core/interfaces/countryProp.interfaces';
import { countries } from '../../../../../data/country';
import { chooseFromCountryList } from './chooseFromCountryList';
import { getCountryListHTML } from './getListHTML';

export function chooseCountry(
    target: HTMLInputElement,
    errorHTML: HTMLElement,
    countryId: string,
    listId: string,
    codeId: string
): void {
    if (target.id === countryId) {
        const list = document.getElementById(listId) as HTMLElement;
        const countryInput = document.getElementById(countryId) as HTMLInputElement;
        const postCodeHTML = document.getElementById(codeId) as HTMLInputElement;

        if (countryInput.value === '') postCodeHTML.setAttribute('placeholder', 'Enter the postcode');

        let countriesArr = countries.filter((country: ICountryProp) => {
            const regex = new RegExp(`^${target.value}`, 'gi');
            return country.Country.match(regex);
        });

        if (target.value.length === 0) {
            countriesArr = [];
            list.innerHTML = '';
        }

        getCountryListHTML(countriesArr, listId);

        chooseFromCountryList(countryInput, list, postCodeHTML, errorHTML);
    }
}
