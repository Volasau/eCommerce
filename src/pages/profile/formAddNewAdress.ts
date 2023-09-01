import { InnerForm } from '../logReg/formClasses/classForm';
import { newAdress } from './interfaces/dataForUpdet';

export class AddressNew {
    container: HTMLDivElement;

    constructor() {
        this.container = this.createContainer();
    }

    createContainer() {
        const addressesContainer = document.createElement('div');
        addressesContainer.classList.add('adresS__container');

        addressesContainer.innerText = 'Add New Adress';

        const form = document.createElement('form');
        form.classList.add('form__adress');

        const countryN = new InnerForm('Country', 'text', 'country', 'country', 'country-error', 'Enter the country');
        const cityN = new InnerForm('City', 'text', 'city', 'city', 'city-error', 'Enter the city');
        const street = new InnerForm('Street', 'text', 'street', 'street', 'street-error', 'Enter the street');
        const postCode = new InnerForm(
            'Post Code',
            'text',
            'postcode',
            'postcode',
            'postcode-error',
            'Enter the postcode'
        );

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

        const billingCheckbox = document.createElement('input');
        billingCheckbox.type = 'checkbox';
        billingCheckbox.id = 'billing';

        const billingLabel = document.createElement('label');
        billingLabel.htmlFor = 'billing';
        billingLabel.textContent = 'Billing';

        form.appendChild(billingCheckbox);
        form.appendChild(billingLabel);

        const shippingCheckbox = document.createElement('input');
        shippingCheckbox.type = 'checkbox';
        shippingCheckbox.id = 'shipping';

        const shippingLabel = document.createElement('label');
        shippingLabel.htmlFor = 'shipping';
        shippingLabel.textContent = 'Shipping';

        form.appendChild(shippingCheckbox);
        form.appendChild(shippingLabel);

        const btnAddArdress = document.querySelector('.btn__add-address');

        const submitButton = document.createElement('button');
        submitButton.textContent = 'Submit';
        submitButton.type = 'button';
        submitButton.addEventListener('click', () => {
            if (
                countryN.inputHTML.value &&
                cityN.inputHTML.value &&
                street.inputHTML.value &&
                postCode.inputHTML.value &&
                (billingDefaultCheckbox.checked ||
                    shippingDefaultCheckbox.checked ||
                    billingCheckbox.checked ||
                    shippingCheckbox.checked)
            ) {
                newAdress.country = countryN.inputHTML.value;
                newAdress.city = cityN.inputHTML.value;
                newAdress.street = street.inputHTML.value;
                newAdress.code = postCode.inputHTML.value;
                newAdress.billingDefault = billingDefaultCheckbox.checked;
                newAdress.shippingDefault = shippingDefaultCheckbox.checked;
                newAdress.billing = billingCheckbox.checked;
                newAdress.shipping = shippingCheckbox.checked;

                // Clear input values and checkboxes
                countryN.inputHTML.value = '';
                cityN.inputHTML.value = '';
                street.inputHTML.value = '';
                postCode.inputHTML.value = '';
                billingDefaultCheckbox.checked = false;
                shippingDefaultCheckbox.checked = false;
                billingCheckbox.checked = false;
                shippingCheckbox.checked = false;

                this.closeForm(addressesContainer);
                if (btnAddArdress && btnAddArdress instanceof HTMLButtonElement) {
                    btnAddArdress.disabled = false;
                }
            } else {
                alert('Please fill in all fields and select at least one checkbox before submitting.');
            }

            console.log(newAdress);
        });

        const cancelButton = document.createElement('button');
        cancelButton.textContent = 'Cancel';
        cancelButton.type = 'button';
        cancelButton.addEventListener('click', () => {
            this.closeForm(addressesContainer);
            if (btnAddArdress && btnAddArdress instanceof HTMLButtonElement) {
                btnAddArdress.disabled = false;
            }
        });

        form.appendChild(countryN.create());
        form.appendChild(cityN.create());
        form.appendChild(street.create());
        form.appendChild(postCode.create());
        form.appendChild(submitButton);
        form.appendChild(cancelButton);

        addressesContainer.appendChild(form);

        return addressesContainer;
    }

    closeForm(container: HTMLDivElement) {
        container.remove(); // Функция для закрытия формы
    }
}
