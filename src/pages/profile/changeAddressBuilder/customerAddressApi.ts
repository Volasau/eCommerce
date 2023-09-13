import { dataCustomer } from '../../../server/customer/customerLogin';
import { ChangeCustomerAddAddress } from '../../../server/profile/changeAddress';
import { showToast, showToastError } from '../../logReg/utils/funcToastify.utils';
import { changeAddress } from '../interfaces/dataForUpdate';

export async function customerAddressApi(
    chbxs: HTMLInputElement[],
    country: string,
    countryText: string,
    cityText: string,
    streetNameText: string,
    codePostText: string,
    id: string,
    countryValue: string,
    cityValue: string,
    streetValue: string,
    postCodeValue: string
) {
    const customerManager = new ChangeCustomerAddAddress(dataCustomer.version, id, dataCustomer.id);
    try {
        let response;
        if (
            countryValue !== countryText ||
            cityValue !== cityText ||
            streetValue !== streetNameText ||
            postCodeValue !== codePostText
        ) {
            response = await customerManager.changeAddress(
                country,
                changeAddress.city,
                changeAddress.street,
                changeAddress.code
            );
        }
        let billingAddressDefault, shippingAddressDefault;

        if (chbxs[2].checked) {
            shippingAddressDefault = await customerManager.setDefaultShippingAddress();
        }

        if (chbxs[3].checked) {
            billingAddressDefault = await customerManager.setDefaultBillingAddress();
        }

        showToast('CHANGE ADDRES');

        const btnEdit = document.querySelector(`.edit-${id}`) as HTMLButtonElement;
        btnEdit.disabled = true;

        return [response, shippingAddressDefault, billingAddressDefault];
    } catch (error) {
        showToastError('ERROR');
        console.error('Error removing address:', error);
    }
}
