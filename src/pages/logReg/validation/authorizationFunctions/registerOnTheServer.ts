import { IRegistration } from '../../../../core/interfaces/registrationInterface';
import { IConsolidatedData } from '../../../../core/interfaces/consolidatedData';
import { IAddressBilling } from '../../../../core/interfaces/addressBilling';
import { IAddressShipping } from '../../../../core/interfaces/addressShipping';
import {
    customerManagerData,
    defaultAddresses,
    defaultBillingAddress,
    defaultShippingAddress,
    noDefaultAddress,
} from '../../utils/customerManager.utils';

export async function registerOnTheServer(reg: IRegistration) {
    const customerManager: IConsolidatedData = await customerManagerData(reg);
    const addressBilling: IAddressBilling = customerManager.addressBilling;
    const addressShipping: IAddressShipping = customerManager.addressShipping;

    if (addressBilling.billingDefault === false && addressShipping.shippingDefault === false) {
        await noDefaultAddress(customerManager);
    } else if (addressBilling.billingDefault === true && addressShipping.shippingDefault === false) {
        await defaultBillingAddress(customerManager);
    } else if (addressBilling.billingDefault === false && addressShipping.shippingDefault === true) {
        await defaultShippingAddress(customerManager);
    } else {
        await defaultAddresses(customerManager);
    }
}
