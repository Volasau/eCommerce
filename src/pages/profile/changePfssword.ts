import { InnerForm } from '../logReg/formClasses/classForm';

export default function showChangePasswordWindow(bodyProfile: HTMLElement) {
    const passwordChangeForm = document.createElement('form');

    const passwordOld = new InnerForm(
        'Password Old',
        'password',
        'password',
        'password',
        'password-error',
        'Enter the old password'
    );
    const passwordNew = new InnerForm(
        'Password New',
        'password',
        'password',
        'password',
        'password-error',
        'Enter the New password'
    );
    const passwordRetNew = new InnerForm(
        'Password New',
        'password',
        'password',
        'password',
        'password-error',
        'Enter the retrair New password'
    );

    passwordChangeForm.appendChild(passwordOld.create());
    passwordChangeForm.appendChild(passwordNew.create());
    passwordChangeForm.appendChild(passwordRetNew.create());

    const changePasswordButton = document.querySelector('.btn__change-pass');

    const submitButton = document.createElement('button');
    submitButton.textContent = 'Submit';
    submitButton.addEventListener('click', () => {
        if (changePasswordButton && changePasswordButton instanceof HTMLButtonElement) {
            changePasswordButton.disabled = false;
        }
        // const oldPassword = oldPasswordInput.value;
        // const newPassword = newPasswordInput.value;
        // const repeatNewPassword = repeatNewPasswordInput.value;

        passwordChangeForm.remove();
    });
    const сancelButton = document.createElement('button');
    сancelButton.textContent = 'Сancel';
    сancelButton.addEventListener('click', () => {
        if (changePasswordButton && changePasswordButton instanceof HTMLButtonElement) {
            changePasswordButton.disabled = false;
        }
        passwordChangeForm.remove();
    });

    passwordChangeForm.append(submitButton, сancelButton);

    bodyProfile.appendChild(passwordChangeForm);
}
