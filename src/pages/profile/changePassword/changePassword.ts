import { divHTML } from '../../catalog/classes/elementBuilder';
import { addShowPassCheckbox } from './addShowPassCheckbox';
import { checkBoxCheck } from './checkBoxCheck';
import { clickCancelBut } from './clickCancelBut';
import { clickPassSubmit } from './clickPassSubmit';
import { createButton } from './createButton';
import { getPasswordChangeForm } from './getPasswordChangeForm';

export class ChangePassword {
    container: HTMLDivElement;

    constructor() {
        this.container = this.createContainer();
    }

    private createContainer(): HTMLDivElement {
        const passwordContainer = divHTML.getElement(
            'CHANGE PASSWORD',
            'pass-cont',
            'password__container-title'
        ) as HTMLDivElement;
        const passwordChangeForm = getPasswordChangeForm();

        const checkBox = addShowPassCheckbox(passwordChangeForm.form);
        checkBoxCheck(checkBox, passwordChangeForm.inners);

        const submitButton = createButton('Submit');
        clickPassSubmit(submitButton, passwordChangeForm, passwordContainer);

        const changePasswordButton = document.querySelector('.btn__change-pass') as HTMLButtonElement;
        const cancelButton = createButton('Cancel');
        clickCancelBut(cancelButton, changePasswordButton, passwordContainer);

        passwordChangeForm.form.append(submitButton, cancelButton);
        passwordContainer.appendChild(passwordChangeForm.form);
        return passwordContainer;
    }
}
