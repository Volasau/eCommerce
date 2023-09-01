import { IRegistrationObject } from '../../../../../core/interfaces/registrationObjectInterface';
import { logInToServer } from '../logInToServer';
import { registerOnTheServer } from '../registerOnTheServer';
import { checkInputsForErrors } from './checkInputsForErrors';
import { saveUsersDataInObject } from './saveUsersDataInObject';

export function submitReg(obj: IRegistrationObject) {
    document.addEventListener('click', (event) => {
        const target = event.target as HTMLButtonElement;
        if (target.id === 'registr-submit') {
            const page = document.getElementById('current-page') as HTMLDivElement;
            console.log(page);
            const errorList = page.querySelectorAll('.error') as NodeList;
            const inputList = page.querySelectorAll('.input') as NodeList;

            if (checkInputsForErrors(errorList, inputList)) return;
            saveUsersDataInObject(inputList, obj);

            const objectReg = obj as IRegistrationObject;
            registerOnTheServer(objectReg);
            setTimeout(() => logInToServer(obj, page), 3000);
        }
    });
}
