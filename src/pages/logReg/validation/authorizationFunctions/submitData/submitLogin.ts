import { IAuthorization } from '../../../../../core/interfaces/authorization.interfaces';
import { logInToServer } from '../logInToServer';
import { checkInputsForErrors } from './checkInputsForErrors';
import { saveUsersData } from './saveUsersData';

export function submitLogin(log: IAuthorization): void {
    const page = document.getElementById('current-page') as HTMLDivElement;
    const errorList = page.querySelectorAll('.error') as NodeList;
    const inputList = page.querySelectorAll('.input') as NodeList;

    if (checkInputsForErrors(errorList, inputList)) return;
    saveUsersData(inputList, log);

    logInToServer(log, page);
}
