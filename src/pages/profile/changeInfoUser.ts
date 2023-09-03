import { dataCustomer } from '../../server/customerLogin';
import { InnerForm } from '../logReg/formClasses/classForm';

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
