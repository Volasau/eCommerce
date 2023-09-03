import { CustomerManager } from '../../server/customerRegistration';
import { IAddressBilling } from './addressBilling';
import { IAddressShipping } from './addressShipping';

export interface IConsolidatedData {
    customerManager: CustomerManager;
    addressBilling: IAddressBilling;
    addressShipping: IAddressShipping;
}
