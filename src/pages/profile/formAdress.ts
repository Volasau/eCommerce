import { InnerForm } from '../logReg/formClasses/classForm';

export class Address {
    container: HTMLDivElement;
    countryText: string;
    cityText: string;
    streetText: string;
    codePostText: string;

    constructor(
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
        this.container = this.createContainer(title, defaultTitle, country, city, streetName, postalCode);
    }

    createContainer(
        title: string,
        defaultTitle: string,
        country: string,
        city: string,
        streetName: string,
        postalCode: string
    ) {
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
        editButton.textContent = 'Edit';
        editButton.classList.add('edit-button');
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

    createElement(tagName: string, className: string, innerText: string) {
        const element = document.createElement(tagName);
        element.classList.add(className);
        element.innerHTML = innerText;
        return element;
    }

    createElementWithSpan(title: string, className: string, content: string) {
        return this.createElement('p', className, `${title}: <span class='${className}'>${content}</span>`);
    }

    showEditForm(countryText: string, cityText: string, streetNameText: string, codePostText: string) {
        // Создаем форму редактирования
        const form = document.createElement('form');
        form.classList.add('form__adress');

        const country = new InnerForm('Country', 'text', 'country', 'country', 'country-error', countryText);
        const city = new InnerForm('City', 'text', 'city', 'city', 'city-error', cityText);
        const street = new InnerForm('Street', 'text', 'street', 'street', 'street-error', streetNameText);
        const postCode = new InnerForm('Post Code', 'text', 'postcode', 'postcode', 'postcode-error', codePostText);

        form.appendChild(country.create());
        form.appendChild(city.create());
        form.appendChild(street.create());
        form.appendChild(postCode.create());

        const shippingCheckbox = document.createElement('input');
        shippingCheckbox.type = 'checkbox';
        shippingCheckbox.id = 'shipping';
        form.appendChild(shippingCheckbox);

        const shippingLabel = document.createElement('label');
        shippingLabel.htmlFor = 'shipping';
        shippingLabel.textContent = 'Shipping';
        form.appendChild(shippingLabel);

        const billingCheckbox = document.createElement('input');
        billingCheckbox.type = 'checkbox';
        billingCheckbox.id = 'billing';
        form.appendChild(billingCheckbox);

        const billingLabel = document.createElement('label');
        billingLabel.htmlFor = 'billing';
        billingLabel.textContent = 'Billing';
        form.appendChild(billingLabel);

        const defaultCheckbox = document.createElement('input');
        defaultCheckbox.type = 'checkbox';
        defaultCheckbox.id = 'default';
        form.appendChild(defaultCheckbox);

        const defaultLabel = document.createElement('label');
        defaultLabel.htmlFor = 'default';
        defaultLabel.textContent = 'Default';
        form.appendChild(defaultLabel);

        const btnEditL = document.querySelectorAll('.edit-button');

        const saveButton = document.createElement('button');
        saveButton.textContent = 'Save';
        saveButton.addEventListener('click', () => {
            btnEditL.forEach((btnEdit) => {
                if (btnEdit && btnEdit instanceof HTMLButtonElement) {
                    btnEdit.disabled = false;
                }
            });
            form.remove();
        });
        const CancelButton = document.createElement('button');
        CancelButton.textContent = 'Cancel';
        CancelButton.addEventListener('click', () => {
            btnEditL.forEach((btnEdit) => {
                if (btnEdit && btnEdit instanceof HTMLButtonElement) {
                    btnEdit.disabled = false;
                }
            });
            form.remove();
        });
        const deletButton = document.createElement('button');
        deletButton.textContent = 'Delet';
        deletButton.addEventListener('click', () => {
            btnEditL.forEach((btnEdit) => {
                if (btnEdit && btnEdit instanceof HTMLButtonElement) {
                    btnEdit.disabled = false;
                }
            });
            // const address = dataCostomer.addresses.find((addr) => addr.id === this.addressId);
            form.remove();
        });
        form.append(saveButton, CancelButton, deletButton);

        this.container.insertBefore(form, this.container.lastChild);
    }
}
