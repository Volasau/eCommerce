import { dataCustomer } from '../../server/customerLogin';
import { CustomerAddAddress } from '../../server/profile/addAdress';
import { InnerForm } from '../logReg/formClasses/classForm';
import { showToast, showToastError } from '../logReg/utils/funcToastify.utils';
import { getISOCodeByCountryName } from '../logReg/utils/getISOCode.utils';
import { logoutAction } from '../logReg/utils/logOutFunc.utils';
import { newAddress } from './interfaces/dataForUpdate';

export class AddressNew {
    container: HTMLDivElement;

    constructor() {
        this.container = this.createContainer();
    }

    createContainer(): HTMLDivElement {
        const addressesContainer = document.createElement('div') as HTMLDivElement;
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

        form.appendChild(countryN.create());
        form.appendChild(cityN.create());
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

        const billingDefaultCheckbox = document.createElement('input');
        billingDefaultCheckbox.type = 'checkbox';
        billingDefaultCheckbox.id = 'billingDefault';
        form.appendChild(billingDefaultCheckbox);

        const billingDefaultLabel = document.createElement('label');
        billingDefaultLabel.htmlFor = 'billingDefault';
        billingDefaultLabel.textContent = 'Billing Default';
        form.appendChild(billingDefaultLabel);

        const shippingDefaultCheckbox = document.createElement('input');
        shippingDefaultCheckbox.type = 'checkbox';
        shippingDefaultCheckbox.id = 'shippingDefault';
        form.appendChild(shippingDefaultCheckbox);

        const shippingDefaultLabel = document.createElement('label');
        shippingDefaultLabel.htmlFor = 'shippingDefault';
        shippingDefaultLabel.textContent = 'Shipping Default';
        form.appendChild(shippingDefaultLabel);

        const btnAddArdress = document.querySelector('.btn__add-address');

        const submitButton = document.createElement('button');
        submitButton.textContent = 'Submit';
        submitButton.type = 'button';
        submitButton.addEventListener('click', async () => {
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
                newAddress.country = countryN.inputHTML.value;
                newAddress.city = cityN.inputHTML.value;
                newAddress.street = street.inputHTML.value;
                newAddress.code = postCode.inputHTML.value;
                newAddress.billingDefault = billingDefaultCheckbox.checked;
                newAddress.shippingDefault = shippingDefaultCheckbox.checked;
                newAddress.billing = billingCheckbox.checked;
                newAddress.shipping = shippingCheckbox.checked;

                const counry = await getISOCodeByCountryName(newAddress.country);
                (async () => {
                    const customerManager = new CustomerAddAddress(dataCustomer.version);
                    try {
                        const response = await customerManager.addAddress(
                            counry,
                            newAddress.city,
                            newAddress.street,
                            newAddress.code,
                            dataCustomer.id
                        );
                        let billingAddress, shippingAddress, billingAddressDefault, shippingAddressDefault;

                        if (shippingCheckbox.checked) {
                            shippingAddress = await customerManager.createShippingAddress(dataCustomer.id);
                        }

                        if (billingCheckbox.checked) {
                            billingAddress = await customerManager.createBillingAddress(dataCustomer.id);
                        }

                        if (shippingDefaultCheckbox.checked) {
                            shippingAddressDefault = await customerManager.setDefaultShippingAddress(dataCustomer.id);
                        }

                        if (billingDefaultCheckbox.checked) {
                            billingAddressDefault = await customerManager.setDefaultBillingAddress(dataCustomer.id);
                        }

                        if (
                            (response && response.status === 409) ||
                            (billingAddress && billingAddress.statusCode === 409) ||
                            (shippingAddress && shippingAddress.statusCode === 409) ||
                            (billingAddressDefault && billingAddressDefault.statusCode === 409) ||
                            (shippingAddressDefault && shippingAddressDefault.statusCode === 409)
                        ) {
                            showToastError('Error ');
                        } else {
                            showToast('Add address');
                        }
                    } catch (error) {
                        console.error('Error removing address:', error);
                    }
                })();
                await logoutAction();

                this.closeForm(addressesContainer);
                if (btnAddArdress && btnAddArdress instanceof HTMLButtonElement) {
                    btnAddArdress.disabled = false;
                }
            } else {
                showToastError('Please fill in all fields and select at least one checkbox before submitting.');
            }
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

        form.appendChild(submitButton);
        form.appendChild(cancelButton);

        addressesContainer.appendChild(form);

        return addressesContainer;
    }

    closeForm(container: HTMLDivElement) {
        container.remove();
    }
}
