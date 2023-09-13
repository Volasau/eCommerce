import { CustomerManager } from '../../server/customer/customerRegistration';
import { IAddressBilling } from './addressBilling';
import { IAddressShipping } from './addressShipping';

export interface IConsolidatedData {
    customerManager: CustomerManager;
    addressBilling: IAddressBilling;
    addressShipping: IAddressShipping;
}
