import { ICustomerResponse } from '../../../core/interfaces/customerResponse.interfaces';
import { dataCustomer } from '../../../server/customer/customerLogin';
import { CustomerAddAdress } from '../../../server/profile/addAdress';
import { showToast, showToastError } from '../../logReg/utils/funcToastify.utils';
import { newAddress } from '../interfaces/dataForUpdate.interfaces';

export type CustomerResp = void | ICustomerResponse | Error;

export async function changeAddressApi(
    country: string,
    chbxs: HTMLInputElement[]
): Promise<Array<Response | CustomerResp> | undefined> {
    const customerManager = new CustomerAddAdress(dataCustomer.version);
    try {
        const response = await customerManager.addAddress(
            country,
            newAddress.city,
            newAddress.street,
            newAddress.code,
            dataCustomer.id
        );
        let billingAddress, shippingAddress, billingAddressDefault, shippingAddressDefault;

        if (chbxs[0].checked) {
            shippingAddress = await customerManager.createShippingAddress(dataCustomer.id);
        }

        if (chbxs[1].checked) {
            billingAddress = await customerManager.createBillingAddress(dataCustomer.id);
        }

        if (chbxs[2].checked) {
            shippingAddressDefault = await customerManager.setDefaultShippingAddress(dataCustomer.id);
        }

        if (chbxs[3].checked) {
            billingAddressDefault = await customerManager.setDefaultBillingAddress(dataCustomer.id);
        }

        showToast('Add address');
        return [response, shippingAddress, billingAddress, shippingAddressDefault, billingAddressDefault];
    } catch (error) {
        showToastError('Error ');
        console.error('Error removing address:', error);
    }
}
