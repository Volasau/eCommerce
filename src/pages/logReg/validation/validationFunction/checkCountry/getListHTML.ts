import { ICountryProp } from '../../../../../core/interfaces/countryPropInterface';

export function getCountryListHTML(countriesArr: ICountryProp[], listId: string) {
    if (countriesArr.length > 0) {
        const html = countriesArr
            .map(
                (country) => `
                    <div class="list-item">
                        ${country.Country}
                    </div>`
            )
            .join('');
        const list = document.getElementById(listId) as HTMLElement;
        list.innerHTML = html;
    }
}
