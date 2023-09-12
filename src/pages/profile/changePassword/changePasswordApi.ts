import { dataCustomer } from '../../../server/customer/customerLogin';
import { changeCustomerPassword } from '../../../server/profile/changePasswordApi';
import { showToast, showToastError } from '../../logReg/utils/funcToastify.utils';
import { logoutAction } from '../../logReg/utils/logOutFunc.utils';
import { passwordChanger } from '../interfaces/dataForUpdate';

export async function changePasswordApi(but: HTMLButtonElement): Promise<void | Response | Error> {
    const customerManager = new changeCustomerPassword();
    try {
        const response = await customerManager.changePassword(
            passwordChanger.passwordOld,
            passwordChanger.passwordNew,
            dataCustomer.version,
            dataCustomer.id
        );

        showToast('Password changed');
        await logoutAction();

        but.disabled = true;

        return response;
    } catch (error) {
        showToastError('The given current password does not match');
        console.error('Error removing address:', error);
    }
}
