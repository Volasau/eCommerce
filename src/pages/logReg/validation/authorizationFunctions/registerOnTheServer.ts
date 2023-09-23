import { IRegistration } from '../../../../core/interfaces/registration.interfaces';
import { IConsolidatedData } from '../../../../core/interfaces/consolidatedData.interfaces';
import { IAddressBilling } from '../../../../core/interfaces/addressBilling.interfaces';
import { IAddressShipping } from '../../../../core/interfaces/addressShipping.interfaces';
import {
    customerManagerData,
    defaultAddresses,
    defaultBillingAddress,
    defaultShippingAddress,
    noDefaultAddress,
} from '../../utils/customerManager.utils';

export async function registerOnTheServer(reg: IRegistration): Promise<void> {
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
