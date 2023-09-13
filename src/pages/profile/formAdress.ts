import { addCheckboxes } from './changeAddress/addCheckboxes';
import { clickDeleteBut } from './changeAddressBuilder/clickDeleteBut';
import { clickSaveButton } from './changeAddressBuilder/clickSaveButton';
import { createSaveBut } from './changeAddressBuilder/createSaveBut';
import { getAddressForm } from './changeAddressBuilder/getAddressForm';
import { clickCancelBut } from './changePassword/clickCancelBut';
import { createButton } from './changePassword/createButton';

export class Address {
    container: HTMLDivElement;

    countryText: string;

    cityText: string;

    streetText: string;

    codePostText: string;

    id: string;

    constructor(
        id: string,
        title: string,
        defaultTitle: string,
        country: string,
        city: string,
        streetName: string,
        postalCode: string
    ) {
        this.countryText = country;
        this.cityText = city;
        this.streetText = streetName;
        this.codePostText = postalCode;
        this.id = id;
        this.container = this.createContainer(id, title, defaultTitle, country, city, streetName, postalCode);
    }

    private createContainer(
        id: string,
        title: string,
        defaultTitle: string,
        country: string,
        city: string,
        streetName: string,
        postalCode: string
    ): HTMLDivElement {
        const addressesContainer = document.createElement('div');
        addressesContainer.classList.add('adresS__container');

        const adrestitleS = this.createElement('h3', 'adres__title', title);
        const adrestitleDefaltS = this.createElement('h3', 'adres__defalt', defaultTitle);
        const addressCountry = this.createElementWithSpan('Country', 'adres__title', country);
        const addressCity = this.createElementWithSpan('City', 'adres__title', city);
        const addressStreet = this.createElementWithSpan('Street Name', 'adres__title', streetName);
        const addressPostalCode = this.createElementWithSpan('Post Code', 'adres__title', postalCode);

        addressesContainer.append(
            adrestitleS,
            adrestitleDefaltS,
            addressCountry,
            addressCity,
            addressStreet,
            addressPostalCode
        );
        const editButton = document.createElement('button');
        editButton.textContent = 'Edit✏️';
        editButton.classList.add('edit-button');
        editButton.classList.add(`edit-${this.id}`);
        editButton.id = `edit-${this.id}`;
        editButton.addEventListener('click', () => {
            editButton.disabled = true;
            const countryText = addressCountry.querySelector('span.adres__title')?.textContent || '';
            const cityText = addressCity.querySelector('span.adres__title')?.textContent || '';
            const streetText = addressStreet.querySelector('span.adres__title')?.textContent || '';
            const codePostText = addressPostalCode.querySelector('span.adres__title')?.textContent || '';
            this.showEditForm(countryText, cityText, streetText, codePostText);
        });

        addressesContainer.appendChild(editButton);

        return addressesContainer;
    }

    private createElement(tagName: string, className: string, innerText: string): HTMLElement {
        const element = document.createElement(tagName);
        element.classList.add(className);
        element.innerHTML = innerText;
        return element;
    }

    private createElementWithSpan(title: string, className: string, content: string): HTMLElement {
        return this.createElement('p', className, `${title}: <span class='${className}'>${content}</span>`);
    }

    private showEditForm(countryText: string, cityText: string, streetNameText: string, codePostText: string): void {
        const form = getAddressForm(countryText, cityText, streetNameText, codePostText);
        const checkBoxes = addCheckboxes(form);

        const saveButton = createSaveBut(this.id);
        clickSaveButton(saveButton, form, checkBoxes, countryText, cityText, streetNameText, codePostText, this.id);

        const cancelButton = createButton('Cancel') as HTMLButtonElement;
        cancelButton.classList.add('btn_adress-card');

        const btnEdit = document.querySelector(`.edit-${this.id}`) as HTMLButtonElement;
        clickCancelBut(cancelButton, btnEdit, form.form);

        const deleteButton = createButton('Delet❌') as HTMLButtonElement;
        deleteButton.classList.add('btn_adress-card');
        deleteButton.classList.add(`${this.id}`);
        deleteButton.id = `delete-${this.id}`;
        clickDeleteBut(deleteButton, this.id, btnEdit, form.form);
        form.form.append(saveButton, cancelButton, deleteButton);

        this.container.insertBefore(form.form, this.container.lastChild);
    }
}
