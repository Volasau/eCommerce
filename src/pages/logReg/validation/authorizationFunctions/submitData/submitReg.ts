import { IRegistration } from '../../../../../core/interfaces/registrationInterface';
import { logInToServer } from '../logInToServer';
import { registerOnTheServer } from '../registerOnTheServer';
import { checkInputsForErrors } from './checkInputsForErrors';
import { saveUsersData } from './saveUsersData';

export function submitReg(reg: IRegistration) {
    document.addEventListener('click', (event) => {
        const target = event.target as HTMLButtonElement;
        if (target.id === 'registr-submit') {
            const page = document.getElementById('current-page') as HTMLDivElement;
            const errorList = page.querySelectorAll('.error') as NodeList;
            const inputList = page.querySelectorAll('.input') as NodeList;

            if (checkInputsForErrors(errorList, inputList)) return;
            saveUsersData(inputList, reg);

            const signIn = reg as IRegistration;
            registerOnTheServer(signIn);
            setTimeout(() => logInToServer(reg, page), 3000);
        }
    });
}
