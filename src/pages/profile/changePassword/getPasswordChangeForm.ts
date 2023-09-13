import { InnerForm } from '../../logReg/formClasses/classForm';
import { IForm } from '../interfaces/iFormInterface';

export function getPasswordChangeForm(): IForm {
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

    return { form: passwordChangeForm, inners: [passwordOld, passwordNew, passwordRetNew] };
}
