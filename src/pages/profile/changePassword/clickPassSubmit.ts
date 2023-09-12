import { showToastError } from '../../logReg/utils/funcToastify.utils';
import { passwordChanger } from '../interfaces/dataForUpdate';
import { IForm } from '../interfaces/iFormInterface';
import { changePasswordApi } from './changePasswordApi';
import { ifPassFormHasErrors } from './ifPassFormHasErrors';

export function clickPassSubmit(but: HTMLButtonElement, form: IForm, container: HTMLDivElement): void {
    but.addEventListener('click', async () => {
        const newPasswordInput = form.inners[1].inputHTML;
        const repeatNewPasswordInput = form.inners[2].inputHTML;
        const newPassword = newPasswordInput.value;
        const repeatNewPassword = repeatNewPasswordInput.value;

        if (newPassword !== repeatNewPassword) {
            showToastError('New passwords do not match. Please make sure they are the same.');
            return;
        }
        if (!newPassword.trim() || !repeatNewPassword.trim()) {
            showToastError('Please fill in all fields before submitting.');
            return;
        }

        if (ifPassFormHasErrors(form.form)) {
            showToastError('Please fix the errors before saving.');
            return;
        }

        passwordChanger.passwordOld = form.inners[0].inputHTML.value;
        passwordChanger.passwordNew = form.inners[1].inputHTML.value;

        const changePasswordButton = document.querySelector('.btn__change-pass') as HTMLButtonElement;
        await changePasswordApi(changePasswordButton);
        changePasswordButton.disabled = false;

        container.remove();
    });
}
