import { changeCustomerInfo } from '../../server/profile/changePerson';
import { dataCustomer } from '../../server/customer/customerLogin';
import { InnerForm } from '../logReg/formClasses/classForm';
import { logoutAction } from '../logReg/utils/logOutFunc.utils';
import { showToast, showToastError } from '../logReg/utils/funcToastify.utils';

export default function showChangeInfoUser(bodyProfile: HTMLElement) {
    const UserChangeForm = document.createElement('form');
    const email = new InnerForm('Email', 'text', 'email', 'email', 'emailp-error', `${dataCustomer.email}`);
    const firstName = new InnerForm('First Name', 'text', 'name', 'name', 'name-error', `${dataCustomer.firstName}`);
    const lastName = new InnerForm(
        'Last Name',
        'text',
        'lastName',
        'last-name',
        'last-name-error',
        `${dataCustomer.lastName}`
    );
    const birthDate = new InnerForm(
        'Date of Birth',
        'date',
        'birthDate',
        'birthdate',
        'birthdate-error',
        `${dataCustomer.dateOfBirth}`
    );

    email.inputHTML.value = dataCustomer.email;
    firstName.inputHTML.value = dataCustomer.firstName;
    lastName.inputHTML.value = dataCustomer.lastName;
    birthDate.inputHTML.value = dataCustomer.dateOfBirth;

    UserChangeForm.appendChild(email.create());
    UserChangeForm.appendChild(firstName.create());
    UserChangeForm.appendChild(lastName.create());
    UserChangeForm.appendChild(birthDate.create());

    const changeInfoUser = document.querySelector('.btn__change-infouser');
    const submitButton = document.createElement('button');
    submitButton.type = 'button';

    submitButton.textContent = 'Submit';
    submitButton.addEventListener('click', async () => {
        const emailValue = email.inputHTML.value;
        const firstNameValue = firstName.inputHTML.value;
        const lastNameValue = lastName.inputHTML.value;
        const birthDateValue = birthDate.inputHTML.value;

        if (
            emailValue === dataCustomer.email &&
            firstNameValue === dataCustomer.firstName &&
            lastNameValue === dataCustomer.lastName &&
            birthDateValue === dataCustomer.dateOfBirth
        ) {
            showToastError('No changes were made.');
            return;
        }

        if (!emailValue || !firstNameValue || !lastNameValue || !birthDateValue) {
            showToastError('Please fill in all fields before submitting.');
            return;
        }

        const errorSpans = UserChangeForm.querySelectorAll('.error');
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

        (async function changeCustomerApi() {
            const newInfo = new changeCustomerInfo();

            try {
                const newFistName = await newInfo.changeFistName(firstNameValue, dataCustomer.version, dataCustomer.id);
                const newLastName = await newInfo.changeLastName(lastNameValue, newFistName.version, dataCustomer.id);
                const newEmail = await newInfo.changeEmail(emailValue, newLastName.version, dataCustomer.id);
                const newBirthDay = await newInfo.changeBirthDate(birthDateValue, newEmail.version, dataCustomer.id);

                if (
                    newFistName.statusCode === 400 ||
                    newLastName.statusCode === 400 ||
                    newEmail.statusCode == 400 ||
                    newBirthDay.statusCode === 400
                ) {
                    showToastError('Error change');
                }
            } catch (error) {
                console.error('Error change');
            }
        })();
        showToast('Your information changed');
        await logoutAction();
        UserChangeForm.remove();

        if (changeInfoUser && changeInfoUser instanceof HTMLButtonElement) {
            changeInfoUser.disabled = false;
        }
    });

    const сancelButton = document.createElement('button');
    сancelButton.type = 'button';

    сancelButton.textContent = 'Сancel';
    сancelButton.addEventListener('click', () => {
        if (changeInfoUser && changeInfoUser instanceof HTMLButtonElement) {
            changeInfoUser.disabled = false;
        }
        UserChangeForm.remove();
    });

    UserChangeForm.append(submitButton, сancelButton);

    bodyProfile.appendChild(UserChangeForm);
}
