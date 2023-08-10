import { createFormGroup } from '../../forms/formInputs';

export function createRegistrationForm() {
    const form = document.createElement('form');
    form.id = 'registration-form';

    const email = createFormGroup('Email', 'text', 'email', 'email', 'email-error', 'Введите e-mail');
    const password = createFormGroup(
        'Password',
        'password',
        'password',
        'password',
        'password-error',
        'Введите пароль'
    );
    const firstName = createFormGroup(
        'First Name',
        'text',
        'first-name',
        'first-name',
        'first-name-error',
        'Введите имя'
    );
    const lastName = createFormGroup(
        'Last Name',
        'text',
        'last-name',
        'last-name',
        'last-name-error',
        'Введите фамилию'
    );
    const street = createFormGroup('Street', 'text', 'street', 'street', 'street-error', 'Введите улицу');
    const city = createFormGroup('City', 'text', 'city', 'city', 'city-error', 'Введите город');
    const birthDate = createFormGroup(
        'Date of Birth',
        'date',
        'birthdate',
        'birthdate',
        'birthdate-error',
        'Введите год рождения'
    );

    const submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.textContent = 'Register';

    form.append(
        email.formGroup,
        password.formGroup,
        firstName.formGroup,
        lastName.formGroup,
        street.formGroup,
        city.formGroup,
        birthDate.formGroup,
        submitButton
    );

    const showPasswordCheckbox = document.createElement('input');
    showPasswordCheckbox.type = 'checkbox';
    showPasswordCheckbox.id = 'show-password-checkbox';
    showPasswordCheckbox.classList.add('show-password-checkbox');
    const showPasswordLabel = document.createElement('label');
    showPasswordLabel.textContent = 'Show Password';
    showPasswordLabel.setAttribute('for', 'show-password-checkbox');
    password.formGroup.append(showPasswordCheckbox, showPasswordLabel);

    showPasswordCheckbox.addEventListener('change', () => {
        if (showPasswordCheckbox.checked) {
            password.input.type = 'text';
        } else {
            password.input.type = 'password';
        }
    });

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        console.log();
    });

    return form;
}
