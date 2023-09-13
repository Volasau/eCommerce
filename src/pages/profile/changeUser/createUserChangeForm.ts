import { dataCustomer } from '../../../server/customer/customerLogin';
import { InnerForm } from '../../logReg/formClasses/classForm';
import { IForm } from '../interfaces/iFormInterface';

export function createUserChangeForm(): IForm {
    const userChangeForm = document.createElement('form') as HTMLFormElement;
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

    userChangeForm.appendChild(email.create());
    userChangeForm.appendChild(firstName.create());
    userChangeForm.appendChild(lastName.create());
    userChangeForm.appendChild(birthDate.create());

    return {
        form: userChangeForm,
        inners: [email, firstName, lastName, birthDate],
    };
}
