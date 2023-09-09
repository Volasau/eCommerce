import { dataCustomer } from '../../server/customerLogin';
import { changeCustomerPassword } from '../../server/profile/changePasswordApi';
import { InnerForm } from '../logReg/formClasses/classForm';
import { showToast, showToastError } from '../logReg/utils/funcToastify.utils';
import { logoutAction } from '../logReg/utils/logOutFunc.utils';
import { changePassworObj } from './interfaces/dataForUpdet';

export class ChangePassword {
    container: HTMLDivElement;

    constructor() {
        this.container = this.createContainer();
    }

    createContainer(): HTMLDivElement {
        const passwordContainer = document.createElement('div');
        passwordContainer.classList.add('password__container-title');

        passwordContainer.innerText = 'CHANGE PASSWORD';
        const passwordChangeForm = document.createElement('form');

        const passwordOld = new InnerForm(
            'Password Old',
            'password',
            'passwordOld',
            'password',
            'password-error',
            'Enter the old password'
        );
        const passwordNew = new InnerForm(
            'Password New',
            'password',
            'passwordNew',
            'password',
            'password-error',
            'Enter the New password'
        );
        const passwordRetNew = new InnerForm(
            'Password New',
            'password',
            'passwordRet',
            'password',
            'password-error',
            'Enter the retrair New password'
        );

        passwordChangeForm.appendChild(passwordOld.create());
        passwordChangeForm.appendChild(passwordNew.create());
        passwordChangeForm.appendChild(passwordRetNew.create());

        const showPasswordCheckbox = document.createElement('input');
        showPasswordCheckbox.type = 'checkbox';
        const showPasswordLabel = document.createElement('label');
        showPasswordLabel.textContent = 'Show Passwords';
        showPasswordLabel.appendChild(showPasswordCheckbox);
        passwordChangeForm.appendChild(showPasswordLabel);

        showPasswordCheckbox.addEventListener('change', () => {
            const passwordInputs = [passwordOld, passwordNew, passwordRetNew];
            passwordInputs.forEach((input) => {
                const inputElement = input.inputHTML;
                if (showPasswordCheckbox.checked) {
                    inputElement.type = 'text';
                } else {
                    inputElement.type = 'password';
                }
            });
        });

        const changePasswordButton = document.querySelector('.btn__change-pass');

        const submitButton = document.createElement('button');
        submitButton.type = 'button';
        submitButton.textContent = 'Submit';
        submitButton.addEventListener('click', async () => {
            const newPasswordInput = passwordNew.inputHTML;
            const repeatNewPasswordInput = passwordRetNew.inputHTML;

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

            const errorSpans = passwordChangeForm.querySelectorAll('.error');
            let hasError = false;
            errorSpans.forEach((errorSpan) => {
                if (errorSpan.textContent) {
                    hasError = true;
                }
            });
            if (hasError) {
                showToastError('Please fix the errors before saving.');
                return;
            }

            changePassworObj.passwordOld = passwordOld.inputHTML.value;
            changePassworObj.passwordNew = passwordNew.inputHTML.value;
            (async () => {
                const customerManager = new changeCustomerPassword();
                try {
                    const response = await customerManager.changePassword(
                        changePassworObj.passwordOld,
                        changePassworObj.passwordNew,
                        dataCustomer.version,
                        dataCustomer.id
                    );

                    if (response.statusCode === 400) {
                        showToastError('The given current password does not match');
                        return;
                    } else {
                        showToast('Password changed');
                        await logoutAction();
                        if (changePasswordButton && changePasswordButton instanceof HTMLButtonElement) {
                            changePasswordButton.disabled = false;
                        }
                    }
                } catch (error) {
                    console.error('Error removing address:', error);
                }
            })();

            if (changePasswordButton && changePasswordButton instanceof HTMLButtonElement) {
                changePasswordButton.disabled = false;
            }

            this.closeForm(passwordContainer);
        });

        const сancelButton = document.createElement('button');
        сancelButton.type = 'button';

        сancelButton.textContent = 'Сancel';
        сancelButton.addEventListener('click', () => {
            if (changePasswordButton && changePasswordButton instanceof HTMLButtonElement) {
                changePasswordButton.disabled = false;
            }
            this.closeForm(passwordContainer);
        });

        passwordChangeForm.append(submitButton, сancelButton);
        passwordContainer.appendChild(passwordChangeForm);
        return passwordContainer;
    }

    closeForm(container: HTMLDivElement) {
        container.remove();
    }
}
