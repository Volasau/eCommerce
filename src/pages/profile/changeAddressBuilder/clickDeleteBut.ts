import { dataCustomer } from '../../../server/customer/customerLogin';
import { CustomerEditManager } from '../../../server/profile/deletAddress';
import { showToast, showToastError } from '../../logReg/utils/funcToastify.utils';
import { logoutAction } from '../../logReg/utils/logOutFunc.utils';

export function clickDeleteBut(but: HTMLButtonElement, id: string, chBut: HTMLButtonElement, form: HTMLFormElement) {
    but.addEventListener('click', async () => {
        const customerManager = new CustomerEditManager();
        try {
            const response = await customerManager.removeAddress(id, dataCustomer.version, dataCustomer.id);

            showToast('This address DELETED');
            await logoutAction();

            chBut.disabled = true;
            return response;
        } catch (error) {
            showToastError('This address has already been deleted');
            console.error('Error removing address:', error);
        }

        form.remove();
    });
}
