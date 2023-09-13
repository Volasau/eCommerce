import { IForm } from '../interfaces/iFormInterface';

export function clickCancelButton(but: HTMLButtonElement, form: IForm, changeInfoUser: HTMLButtonElement): void {
    but.addEventListener('click', () => {
        if (changeInfoUser && changeInfoUser instanceof HTMLButtonElement) {
            changeInfoUser.disabled = false;
        }
        form.form.remove();
    });
}
