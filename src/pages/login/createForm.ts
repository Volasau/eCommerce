import { createFormGroup } from '../../components/forms/formInputs';

export function createLoginForm() {
    const form = document.createElement('form');
    form.id = 'login-form';

    const email = createFormGroup('Email', 'text', 'email', 'email', 'email-error', 'Введите e-mail');
    const password = createFormGroup(
        'Password',
        'password',
        'password',
        'password',
        'password-error',
        'Введите пароль'
    );

    const submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.textContent = 'Login';

    form.append(email.formGroup, password.formGroup, submitButton);

    const showPasswordCheckbox = document.createElement('input');
    showPasswordCheckbox.type = 'checkbox';
    showPasswordCheckbox.id = 'show-password-checkbox';
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
    });

    return form;
}
