import { IRegistration } from '../../../../../core/interfaces/registration.interfaces';
import { logInToServer } from '../logInToServer';
import { registerOnTheServer } from '../registerOnTheServer';
import { checkInputsForErrors } from './checkInputsForErrors';
import { saveUsersData } from './saveUsersData';

export function submitReg(reg: IRegistration): void {
    const page = document.getElementById('current-page') as HTMLDivElement;
    const errorList = page.querySelectorAll('.error') as NodeList;
    const inputList = page.querySelectorAll('.input') as NodeList;

    if (checkInputsForErrors(errorList, inputList)) return;
    saveUsersData(inputList, reg);

    const signIn = reg as IRegistration;
    registerOnTheServer(signIn);
    setTimeout(() => logInToServer(reg, page), 3000);
}
