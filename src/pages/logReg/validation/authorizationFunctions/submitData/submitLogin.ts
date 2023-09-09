import { IAuthorizationObj } from '../../../../../core/interfaces/authorizationObjInterface';
import { logInToServer } from '../logInToServer';
import { checkInputsForErrors } from './checkInputsForErrors';
import { saveUsersDataInObj } from './saveUsersDataInObject';

export function submitLogin(obj: IAuthorizationObj) {
    document.addEventListener('click', (event) => {
        const target = event.target as HTMLButtonElement;
        if (target.id === 'login-submit') {
            const page = document.getElementById('current-page') as HTMLDivElement;
            const errorList = page.querySelectorAll('.error') as NodeList;
            const inputList = page.querySelectorAll('.input') as NodeList;

            if (checkInputsForErrors(errorList, inputList)) return;
            saveUsersDataInObj(inputList, obj);

            logInToServer(obj, page);
        }
    });
}
