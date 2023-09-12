import { dataCustomer } from '../../../server/customer/customerLogin';
import { changeCustomerInfo } from '../../../server/profile/changePerson';
import { showToastError } from '../../logReg/utils/funcToastify.utils';

export async function changeCustomerApi(inputsVal: string[]) {
    const newInfo = new changeCustomerInfo();

    try {
        const newFistName = await newInfo.changeFistName(inputsVal[1], dataCustomer.version, dataCustomer.id);
        const newLastName = await newInfo.changeLastName(inputsVal[2], newFistName.version, dataCustomer.id);
        const newEmail = await newInfo.changeEmail(inputsVal[0], newLastName.version, dataCustomer.id);
        const newBirthDay = await newInfo.changeBirthDate(inputsVal[3], newEmail.version, dataCustomer.id);
        return newBirthDay;
    } catch (error) {
        showToastError('Error change');
        console.error('Error change');
    }
}
