import { CustomerManager } from '../../server/customer/customerRegistration';
import { IAddressBilling } from './addressBilling.interfaces';
import { IAddressShipping } from './addressShipping.interfaces';

export interface IConsolidatedData {
    customerManager: CustomerManager;
    addressBilling: IAddressBilling;
    addressShipping: IAddressShipping;
}
