import { ICustomerResponse } from '../../core/interfaces/customerResponse';
import { findCountryNameByISO } from './findCountry';
import { Address } from './formAdress';

export function renderAddresses(dataCostomer: ICustomerResponse) {
    const addressesContainer = document.createElement('div');
    addressesContainer.classList.add('adres__container');

    dataCostomer.addresses.forEach((address) => {
        const countryName = findCountryNameByISO(address.country);

        const isBillingAddress = dataCostomer.billingAddressIds.includes(address.id);
        const isShippingAddress = dataCostomer.shippingAddressIds.includes(address.id);
        const isDefaultShippingAddress = address.id === dataCostomer.defaultShippingAddressId;
        const isDefaultBillingAddress = address.id === dataCostomer.defaultBillingAddressId;

        let addressTitle = '';
        if (isBillingAddress && isShippingAddress) {
            addressTitle = 'BILLING and SHIPPING ADDRESS';
        } else if (isBillingAddress) {
            addressTitle = 'BILLING ADDRESS';
        } else if (isShippingAddress) {
            addressTitle = 'SHIPPING ADDRESS';
        }

        let addressDefaul = '';
        if (isDefaultShippingAddress && isDefaultBillingAddress) {
            addressDefaul = 'DEFAULT SHIPPING and BILLING ADDRESS';
        } else if (isDefaultBillingAddress) {
            addressDefaul = 'DEFAULT BILLING ADDRESS';
        } else if (isDefaultShippingAddress) {
            addressDefaul = 'DEFAULT SHIPPING ADDRESS';
        } else {
            addressDefaul = '--------------------------';
        }

        const addressInstance = new Address(
            address.id,
            addressTitle,
            addressDefaul,
            countryName,
            address.city,
            address.streetName,
            address.postalCode
        );

        addressesContainer.appendChild(addressInstance.container);
    });

    return addressesContainer;
}
