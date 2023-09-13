import { createUserChangeForm } from './createUserChangeForm';
import { clickSubmitBut } from './clickSubmitBut';
import { clickCancelButton } from './clickCancelButton';

export default function showChangeInfoUser(bodyProfile: HTMLElement): void {
    const userChangeForm = createUserChangeForm();
    const changeInfoUser = document.querySelector('.btn__change-infouser') as HTMLButtonElement;

    const submitButton = document.createElement('button');
    submitButton.type = 'button';
    submitButton.textContent = 'Submit';
    clickSubmitBut(submitButton, userChangeForm, changeInfoUser);

    const cancelButton = document.createElement('button');
    cancelButton.type = 'button';
    cancelButton.textContent = 'Cancel';
    clickCancelButton(cancelButton, userChangeForm, changeInfoUser);

    userChangeForm.form.append(submitButton, cancelButton);

    bodyProfile.appendChild(userChangeForm.form);
}
