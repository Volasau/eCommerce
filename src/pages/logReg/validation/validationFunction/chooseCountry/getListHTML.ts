import { ICountry } from '../../../../../core/interfaces/countyInterface';

export function getCountryListHTML(countriesArr: ICountry[]) {
    if (countriesArr.length > 0) {
        const html = countriesArr
            .map(
                (country) => `
                    <div class="list-item">
                        ${country.Country}
                    </div>`
            )
            .join('');
        const list = document.getElementById('country-list') as HTMLElement;
        list.innerHTML = html;
    }
}
