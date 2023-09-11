import { CustomerManager } from '../../../server/customer/customerRegistration';
import { IRegistration } from '../../../core/interfaces/registrationInterface';
import { getISOCodeByCountryName } from './getISOCode.utils';
import { IAddressBilling } from '../../../core/interfaces/addressBilling';
import { IAddressShipping } from '../../../core/interfaces/addressShipping';
import { IConsolidatedData } from '../../../core/interfaces/consolidatedData';
import { showToast } from './funcToastify.utils';
import { bearer_token_cc } from '../../..';

export async function customerManagerData(reg: IRegistration) {
    const authBearer = `Bearer ${await bearer_token_cc}`;
    const customerManager = new CustomerManager(authBearer, reg.email, reg.name, reg.lastName, reg.password);
    await customerManager.createCustomer();
    await customerManager.createBirthDate(reg.birthDate);
    const countryCodeBilling: string = await getISOCodeByCountryName(reg.country);
    const countryCodeShipping: string = await getISOCodeByCountryName(reg.countryShip);

    const addressBilling: IAddressBilling = {
        streetName: reg.street,
        city: reg.city,
        postCode: reg.postcode,
        country: countryCodeBilling,
        billingDefault: reg.billingDefault,
    };

    const addressShipping: IAddressShipping = {
        streetName: reg.streetShip,
        city: reg.cityShip,
        postCode: reg.postcodeShip,
        country: countryCodeShipping,
        shippingDefault: reg.shippingDefault,
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
