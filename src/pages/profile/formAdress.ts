import { dataCustomer } from '../../server/customer/customerLogin';
import { ChangeCustomerAddAddress } from '../../server/profile/changeAddress';
import { CustomerEditManager } from '../../server/profile/deletAddress';
import { InnerForm } from '../logReg/formClasses/classForm';
import { showToast, showToastError } from '../logReg/utils/funcToastify.utils';
import { getISOCodeByCountryName } from '../logReg/utils/getISOCode.utils';
import { logoutAction } from '../logReg/utils/logOutFunc.utils';
import { changeAddress } from './interfaces/dataForUpdate';

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

    createContainer(
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

    createElement(tagName: string, className: string, innerText: string): HTMLElement {
        const element = document.createElement(tagName);
        element.classList.add(className);
        element.innerHTML = innerText;
        return element;
    }

    createElementWithSpan(title: string, className: string, content: string): HTMLElement {
        return this.createElement('p', className, `${title}: <span class='${className}'>${content}</span>`);
    }

    showEditForm(countryText: string, cityText: string, streetNameText: string, codePostText: string) {
        const form = document.createElement('form');
        form.classList.add('form__adress');

        const countryForm = new InnerForm('Country', 'text', 'country', 'country', 'country-error', countryText);
        const city = new InnerForm('City', 'text', 'city', 'city', 'city-error', cityText);
        const street = new InnerForm('Street', 'text', 'street', 'street', 'street-error', streetNameText);
        const postCode = new InnerForm('Post Code', 'text', 'postcode', 'postcode', 'postcode-error', codePostText);

        countryForm.inputHTML.value = countryText;
        city.inputHTML.value = cityText;
        street.inputHTML.value = streetNameText;
        postCode.inputHTML.value = codePostText;

        form.appendChild(countryForm.create());
        form.appendChild(city.create());
        form.appendChild(street.create());
        form.appendChild(postCode.create());

        const billingDefaultCheckbox = document.createElement('input');
        billingDefaultCheckbox.type = 'checkbox';
        billingDefaultCheckbox.id = 'billingDefault';

        const billingDefaultLabel = document.createElement('label');
        billingDefaultLabel.htmlFor = 'billingDefault';
        billingDefaultLabel.textContent = 'Billing Default';

        form.appendChild(billingDefaultCheckbox);
        form.appendChild(billingDefaultLabel);

        const shippingDefaultCheckbox = document.createElement('input');
        shippingDefaultCheckbox.type = 'checkbox';
        shippingDefaultCheckbox.id = 'shippingDefault';

        const shippingDefaultLabel = document.createElement('label');
        shippingDefaultLabel.htmlFor = 'shippingDefault';
        shippingDefaultLabel.textContent = 'Shipping Default';

        form.appendChild(shippingDefaultCheckbox);
        form.appendChild(shippingDefaultLabel);

        const btnEdit = document.querySelector(`.edit-${this.id}`);
        const saveButton = document.createElement('button');
        saveButton.type = 'button';
        saveButton.classList.add('btn_adress-card');
        saveButton.textContent = 'Save';
        saveButton.id = `save-${this.id}`;
        saveButton.addEventListener('click', async () => {
            const countryValue = countryForm.inputHTML.value;
            const cityValue = city.inputHTML.value;
            const streetValue = street.inputHTML.value;
            const postCodeValue = postCode.inputHTML.value;

            if (
                !countryForm.inputHTML.value ||
                !city.inputHTML.value ||
                !street.inputHTML.value ||
                !postCode.inputHTML.value /*||*/
            ) {
                showToastError('Please fill in all fields and select at least one checkbox before submitting.');
                return;
            }
            const errorSpans = form.querySelectorAll('.error');
            let hasError = false;
            errorSpans.forEach((errorSpan) => {
                if (errorSpan.textContent) {
                    hasError = true;
                }
            });
            if (hasError) {
                showToastError('Please fix the errors before saving.');
                return;
            }

            changeAddress.id = this.id;
            changeAddress.country = countryForm.inputHTML.value;
            changeAddress.city = city.inputHTML.value;
            changeAddress.street = street.inputHTML.value;
            changeAddress.code = postCode.inputHTML.value;
            changeAddress.billingDefault = billingDefaultCheckbox.checked;
            changeAddress.shippingDefault = shippingDefaultCheckbox.checked;
            const country = await getISOCodeByCountryName(changeAddress.country);

            (async () => {
                const customerManager = new ChangeCustomerAddAddress(dataCustomer.version, this.id, dataCustomer.id);
                try {
                    let response;
                    if (
                        countryValue !== countryText ||
                        cityValue !== cityText ||
                        streetValue !== streetNameText ||
                        postCodeValue !== codePostText
                    ) {
                        response = await customerManager.changeAddress(
                            country,
                            changeAddress.city,
                            changeAddress.street,
                            changeAddress.code
                        );
                    }
                    let billingAddressDefault, shippingAddressDefault;

                    if (shippingDefaultCheckbox.checked) {
                        shippingAddressDefault = await customerManager.setDefaultShippingAddress();
                    }

                    if (billingDefaultCheckbox.checked) {
                        billingAddressDefault = await customerManager.setDefaultBillingAddress();
                    }
                    if (
                        (response && response.statusCode === 409) ||
                        (billingAddressDefault && billingAddressDefault.statusCode === 409) ||
                        (shippingAddressDefault && shippingAddressDefault.statusCode === 409)
                    ) {
                        showToastError('ERROR');
                    } else {
                        showToast('CHANGE ADDRES');

                        if (btnEdit && btnEdit instanceof HTMLButtonElement) {
                            btnEdit.disabled = true;
                        }
                    }
                } catch (error) {
                    console.error('Error removing address:', error);
                }
            })();

            if (btnEdit && btnEdit instanceof HTMLButtonElement) {
                btnEdit.disabled = false;
            }
            await logoutAction();
            form.remove();
        });

        const CancelButton = document.createElement('button');
        CancelButton.type = 'button';
        CancelButton.classList.add('btn_adress-card');

        CancelButton.textContent = 'Cancel';
        CancelButton.addEventListener('click', () => {
            if (btnEdit && btnEdit instanceof HTMLButtonElement) {
                btnEdit.disabled = false;
            }

            form.remove();
        });

        const deletButton = document.createElement('button');
        deletButton.type = 'button';
        deletButton.classList.add('btn_adress-card');

        deletButton.textContent = 'Delet❌';
        deletButton.classList.add(`${this.id}`);
        deletButton.id = `delete-${this.id}`;
        deletButton.addEventListener('click', () => {
            (async () => {
                const customerManager = new CustomerEditManager();
                try {
                    const response = await customerManager.removeAddress(
                        this.id,
                        dataCustomer.version,
                        dataCustomer.id
                    );

                    if (response.statusCode === 409) {
                        showToastError('This address has already been deleted');
                    } else {
                        showToast('This address DELETED');
                        await logoutAction();

                        if (btnEdit && btnEdit instanceof HTMLButtonElement) {
                            btnEdit.disabled = true;
                        }
                    }
                } catch (error) {
                    console.error('Error removing address:', error);
                }
            })();

            form.remove();
        });
        form.append(saveButton, CancelButton, deletButton);

        this.container.insertBefore(form, this.container.lastChild);
    }
}
