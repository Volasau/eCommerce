import { IAuthorisObj } from '../../../../core/interface/aythorisObjInterface';
import { IRegObj } from '../../../../core/interface/regObjInterface';
import { authServer } from './authServer';
import { regServer } from './regServer';

export function submitData(page: HTMLElement, obj: IAuthorisObj | IRegObj) {
    const submit = page.querySelector('button') as HTMLButtonElement;
    submit.addEventListener('click', () => {
        const errorList = page.querySelectorAll('.error') as NodeList;
        const inputList = page.querySelectorAll('.input') as NodeList;
        let flag = true;
        errorList.forEach((error) => {
            const errorHTML = error as HTMLSpanElement;
            if (errorHTML.textContent !== '') {
                flag = false;
                return;
            }
        });
        if (flag) {
            inputList.forEach((inp) => {
                const input = inp as HTMLInputElement;
                Object.defineProperty(obj, input.id, { value: input.value });
            });
            if (Object.keys(obj).length === 2) {
                authServer(obj);
            } else {
                regServer(obj);
            }
        }
    });
}
