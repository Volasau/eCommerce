import { countries } from '../../../../../data/country';

export function chooseFromCountryList(
    countryInput: HTMLInputElement,
    list: Element,
    postCodeHTML: HTMLInputElement,
    errorHTML: HTMLElement
): void {
    list.addEventListener('click', (event) => {
        const target = event.target as HTMLDivElement;
        const country = target.textContent ? target.textContent : '';
        countryInput.value = country.trim();
        list.innerHTML = '';
        errorHTML.innerHTML = '';
        postCodeHTML.value = '';
        let pcFormat = '';
        countries.forEach((state) => {
            if (state.Country === country.trim()) {
                pcFormat = state.Format;
            }
        });
        postCodeHTML.setAttribute('placeholder', `${pcFormat}: mandatory format of postcode for ${country.trim()}`);
    });
}
