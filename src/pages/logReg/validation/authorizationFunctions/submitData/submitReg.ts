import { IRegistrationObj } from '../../../../../core/interfaces/registrationObjInterface';
import { logInToServer } from '../logInToServer';
import { registerOnTheServer } from '../registerOnTheServer';
import { checkInputsForErrors } from './checkInputsForErrors';
import { saveUsersDataInObj } from './saveUsersDataInObject';

export function submitReg(obj: IRegistrationObj) {
    document.addEventListener('click', (event) => {
        const target = event.target as HTMLButtonElement;
        if (target.id === 'registr-submit') {
            const page = document.getElementById('current-page') as HTMLDivElement;
            const errorList = page.querySelectorAll('.error') as NodeList;
            const inputList = page.querySelectorAll('.input') as NodeList;

            if (checkInputsForErrors(errorList, inputList)) return;
            saveUsersDataInObj(inputList, obj);

            const objectReg = obj as IRegistrationObj;
            registerOnTheServer(objectReg);
            setTimeout(() => logInToServer(obj, page), 3000);
        }
    });
}
