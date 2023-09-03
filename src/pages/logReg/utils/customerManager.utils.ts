import { constants } from '../../../data/constants';
import { CustomerManager } from '../../../server/stomerRegistration';
import { IRegistrationObject } from '../../../core/interfaces/registrationObjectInterface';
import { getISOCodeByCountryName } from './getISOCode.utils';
import { IAddressBilling } from '../../../core/interfaces/addressBilling';
import { IAddressShipping } from '../../../core/interfaces/addressShipping';
import { IConsolidatedData } from '../../../core/interfaces/consolidatedData';
import { showToast } from './funcToastify.utils';

export async function customerManagerData(obj: IRegistrationObject) {
    const customerManager = new CustomerManager(
        constants.apiUrlCustomers,
        obj.email,
        obj.name,
        obj.lastName,
        obj.password
    );
    await customerManager.createCustomer();
    await customerManager.createBirthDate(obj.birthDate);
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
        showToast('Registration is successful!');
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
        showToast('Registration is successful!');
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
        showToast('Registration is successful!');
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
        showToast('Registration is successful!');
    } catch (error) {
        console.error('An error occurred:', error);
    }
}
