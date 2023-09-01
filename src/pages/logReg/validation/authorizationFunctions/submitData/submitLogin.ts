import { IAuthorizationObject } from '../../../../../core/interfaces/authorizationObjectInterface';
import { logInToServer } from '../logInToServer';
import { checkInputsForErrors } from './checkInputsForErrors';
import { saveUsersDataInObject } from './saveUsersDataInObject';

export function submitLogin(obj: IAuthorizationObject) {
    document.addEventListener('click', (event) => {
        const target = event.target as HTMLButtonElement;
        if (target.id === 'login-submit') {
            const page = document.getElementById('current-page') as HTMLDivElement;
            console.log(page);
            const errorList = page.querySelectorAll('.error') as NodeList;
            const inputList = page.querySelectorAll('.input') as NodeList;

            if (checkInputsForErrors(errorList, inputList)) return;
            saveUsersDataInObject(inputList, obj);

            logInToServer(obj, page);
        }
    });
}
