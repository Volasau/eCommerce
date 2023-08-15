import { ICountryObj } from '../../../../../core/interfaces/countryObjInterface';

export function getCountryListHTML(countriesArr: ICountryObj[]) {
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
