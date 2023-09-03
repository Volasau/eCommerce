import { CustomerManager } from '../../server/stomerRegistration';
import { IAddressBilling } from './addressBilling';
import { IAddressShipping } from './addressShipping';

export interface IConsolidatedData {
    customerManager: CustomerManager;
    addressBilling: IAddressBilling;
    addressShipping: IAddressShipping;
}
