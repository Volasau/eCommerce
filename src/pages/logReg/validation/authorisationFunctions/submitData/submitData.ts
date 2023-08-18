import { IAuthorisObj } from '../../../../../core/interfaces/aythorisObjInterface';
import { IRegObj } from '../../../../../core/interfaces/regObjInterface';
import { logInToServer } from '../logInToServer';
import { registerOnTheServer } from '../registerOnTheServer';
import { checkInputsForErrors } from './checkInputsForErrors';
import { saveUsersDataInObject } from './saveUsersDataInObject';

export function submitData(page: HTMLElement, obj: IAuthorisObj | IRegObj) {
    const submit = page.querySelector('button') as HTMLButtonElement;
    submit.addEventListener('click', async () => {
        const errorList = page.querySelectorAll('.error') as NodeList;
        const inputList = page.querySelectorAll('.input') as NodeList;

        if (checkInputsForErrors(errorList)) return;
        saveUsersDataInObject(inputList, obj);

        if (Object.keys(obj).length === 2) {
            logInToServer(obj, page);
        } else {
            registerOnTheServer(obj);
        }
    });
}
