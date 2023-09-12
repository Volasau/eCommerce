import { showToast, showToastError } from '../../logReg/utils/funcToastify.utils';
import { logoutAction } from '../../logReg/utils/logOutFunc.utils';
import { IForm } from '../interfaces/iFormInterface';
import { changeCustomerApi } from './changeCustomerApi';
import { inputHasError } from './inputHasError';
import { inputIsEmpty } from './inputIsEmpty';
import { thereAreNoAnyChanges } from './thereAreNotAnyChanges';

export function clickSubmitBut(but: HTMLButtonElement, form: IForm, changeInfoUser: HTMLButtonElement): void {
    but.addEventListener('click', async () => {
        const emailValue = form.inners[0].inputHTML.value;
        const firstNameValue = form.inners[1].inputHTML.value;
        const lastNameValue = form.inners[2].inputHTML.value;
        const birthDateValue = form.inners[3].inputHTML.value;
        const inputs = [emailValue, firstNameValue, lastNameValue, birthDateValue];

        if (thereAreNoAnyChanges(inputs)) {
            showToastError('Changes were not made.');
            return;
        }

        if (inputIsEmpty(inputs)) {
            showToastError('Please fill in all fields before submitting.');
            return;
        }

        if (inputHasError(form.form)) {
            showToastError('Please fix the errors before saving.');
            return;
        }

        await changeCustomerApi(inputs);
        showToast('Your information changed');

        await logoutAction();
        form.form.remove();

        if (changeInfoUser && changeInfoUser instanceof HTMLButtonElement) {
            changeInfoUser.disabled = false;
        }
    });
}
