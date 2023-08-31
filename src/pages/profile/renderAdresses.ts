import { ICustomerResponse } from '../../core/interfaces/CustomerResponse';
import { findCountryNameByISO } from './findCountry';
import { Address } from './formAdress';

//////Создаем карточки для каждого адреса

export function renderAddresses(dataCostomer: ICustomerResponse) {
    const addressesContainer = document.createElement('div');
    addressesContainer.classList.add('adres__container');

    dataCostomer.addresses.forEach((address) => {
        /////////Перевод имени страны с кода сокращения в полное название страны
        const countryName = findCountryNameByISO(address.country);

        ////////Получаем id адрессов для билинга шипинга и дефолтных
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
