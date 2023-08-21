import { constants } from '../../../data/constants';
import { CustomerManager } from '../../../server/CustomerRegistration';
import { IRegObj } from '../../../core/interfaces/regObjInterface';
import { getISOCodeByCountryName } from './getISOCode';
import { IAddressBilling } from '../../../core/interfaces/addressBilling';
import { IAddressShipping } from '../../../core/interfaces/addressShipping';
import { IConsolidatedData } from '../../../core/interfaces/consolidatedData';

export async function customerManagerData(obj: IRegObj) {
    const customerManager = new CustomerManager(
        constants.apiUrlCustomers,
        obj.email,
        obj.name,
        obj.lastName,
        obj.password
    );
    await customerManager.createCustomer();
    const countryCodeBilling: string = await getISOCodeByCountryName(obj.country);
    const countryCodeShipping: string = await getISOCodeByCountryName(obj.countryShip);

    const addressBilling: IAddressBilling = {
        streetName: obj.street,
        city: obj.city,
        postCode: obj.postcode,
        country: countryCodeBilling,
        billingDefault: obj.billingDefault,
    };

    const addressShipping: IAddressShipping = {
        streetName: obj.streetShip,
        city: obj.cityShip,
        postCode: obj.postcodeShip,
        country: countryCodeShipping,
        shippingDefault: obj.shippingDefault,
    };

    const consolidatedData: IConsolidatedData = {
        customerManager,
        addressBilling,
        addressShipping,
    };

    return consolidatedData;
}

export async function noDefaultAddress(consolidatedData: IConsolidatedData) {
    const customerManager = consolidatedData.customerManager;
    const addressBilling: IAddressBilling = consolidatedData.addressBilling;
    const addressShipping: IAddressShipping = consolidatedData.addressShipping;
    try {
        await customerManager.createAddress(
            addressBilling.streetName,
            addressBilling.city,
            addressBilling.postCode,
            addressBilling.country,
            0
        );

        await customerManager.createBillingAddress();

        await customerManager.createAddress(
            addressShipping.streetName,
            addressShipping.city,
            addressShipping.postCode,
            addressShipping.country,
            1
        );

        await customerManager.createShippingAddress();
    } catch (error) {
        console.error('An error occurred:', error);
    }
}

export async function defaultBillingAddress(consolidatedData: IConsolidatedData) {
    const customerManager = consolidatedData.customerManager;
    const addressBilling: IAddressBilling = consolidatedData.addressBilling;
    const addressShipping: IAddressShipping = consolidatedData.addressShipping;
    try {
        await customerManager.createAddress(
            addressBilling.streetName,
            addressBilling.city,
            addressBilling.postCode,
            addressBilling.country,
            0
        );

        await customerManager.createBillingAddress();
        await customerManager.setDefaultBillingAddress();

        await customerManager.createAddress(
            addressShipping.streetName,
            addressShipping.city,
            addressShipping.postCode,
            addressShipping.country,
            1
        );

        await customerManager.createShippingAddress();
    } catch (error) {
        console.error('An error occurred:', error);
    }
}

export async function defaultShippingAddress(consolidatedData: IConsolidatedData) {
    const customerManager = consolidatedData.customerManager;
    const addressBilling: IAddressBilling = consolidatedData.addressBilling;
    const addressShipping: IAddressShipping = consolidatedData.addressShipping;
    try {
        await customerManager.createAddress(
            addressBilling.streetName,
            addressBilling.city,
            addressBilling.postCode,
            addressBilling.country,
            0
        );

        await customerManager.createBillingAddress();

        await customerManager.createAddress(
            addressShipping.streetName,
            addressShipping.city,
            addressShipping.postCode,
            addressShipping.country,
            1
        );

        await customerManager.createShippingAddress();
        await customerManager.setDefaultShippingAddress();
    } catch (error) {
        console.error('An error occurred:', error);
    }
}
export async function defaultAddresses(consolidatedData: IConsolidatedData) {
    const customerManager = consolidatedData.customerManager;
    const addressBilling: IAddressBilling = consolidatedData.addressBilling;
    const addressShipping: IAddressShipping = consolidatedData.addressShipping;
    try {
        await customerManager.createAddress(
            addressBilling.streetName,
            addressBilling.city,
            addressBilling.postCode,
            addressBilling.country,
            0
        );

        await customerManager.createBillingAddress();
        await customerManager.setDefaultBillingAddress();

        await customerManager.createAddress(
            addressShipping.streetName,
            addressShipping.city,
            addressShipping.postCode,
            addressShipping.country,
            1
        );

        await customerManager.createShippingAddress();
        await customerManager.setDefaultShippingAddress();
    } catch (error) {
        console.error('An error occurred:', error);
    }
}
