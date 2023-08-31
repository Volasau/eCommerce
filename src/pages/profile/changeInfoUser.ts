import { dataCostomer } from '../../server/CustomerLogin';
import { InnerForm } from '../logReg/formClasses/classForm';

export default function showChangeInfoUser(bodyProfile: HTMLElement) {
    const UserChangeForm = document.createElement('form');
    const email = new InnerForm('Email', 'text', 'email', 'email', 'emailp-error', `${dataCostomer.email}`);
    const firstName = new InnerForm('First Name', 'text', 'name', 'name', 'name-error', `${dataCostomer.firstName}`);
    const lastName = new InnerForm(
        'Last Name',
        'text',
        'lastName',
        'last-name',
        'last-name-error',
        `${dataCostomer.lastName}`
    );
    const birthDate = new InnerForm(
        'Date of Birth',
        'date',
        'birthDate',
        'birthdate',
        'birthdate-error',
        `${dataCostomer.dateOfBirth}`
    );

    UserChangeForm.appendChild(email.create());
    UserChangeForm.appendChild(firstName.create());

    UserChangeForm.appendChild(lastName.create());

    UserChangeForm.appendChild(birthDate.create());

    //////////////////////////////////////////////////////////////////Кнопка отмены

    const changeInfoUser = document.querySelector('.btn__change-infouser');
    const submitButton = document.createElement('button');
    submitButton.textContent = 'Submit';
    submitButton.addEventListener('click', () => {
        if (changeInfoUser && changeInfoUser instanceof HTMLButtonElement) {
            changeInfoUser.disabled = false;
        }

        UserChangeForm.remove();
    });

    //////////////////////////////////////////////////////////////////Кнопка отмены
    const сancelButton = document.createElement('button');
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
