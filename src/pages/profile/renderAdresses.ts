import { ICustomerResponse } from '../../core/interfaces/customerResponse';
import { divHTML } from '../catalog/classes/elementBuilder';
import { findCountryNameByISO } from './findCountry';
import { Address } from './formAdress';
import { setAddressTitle } from './setAddressTittle';

export function renderAddresses(dataCustomer: ICustomerResponse): HTMLDivElement {
    const addressesContainer = divHTML.getElement('', 'adres__cont', 'adres__container') as HTMLDivElement;

    dataCustomer.addresses.forEach((address) => {
        const countryName = findCountryNameByISO(address.country);
        const isBillingAddress = dataCustomer.billingAddressIds.includes(address.id);
        const isShippingAddress = dataCustomer.shippingAddressIds.includes(address.id);
        const isDefaultShippingAddress = address.id === dataCustomer.defaultShippingAddressId;
        const isDefaultBillingAddress = address.id === dataCustomer.defaultBillingAddressId;
        const addressTitle = setAddressTitle(isBillingAddress, isShippingAddress, '');
        const addressDefault = setAddressTitle(isDefaultBillingAddress, isDefaultShippingAddress, 'DEFAULT ');

        const addressInstance = new Address(
            address.id,
            addressTitle,
            addressDefault,
            countryName,
            address.city,
            address.streetName,
            address.postalCode
        );

        addressesContainer.appendChild(addressInstance.container);
    });

    return addressesContainer;
}
