import { IInnerForm } from '../../../core/interfaces/innerForm.interfaces';

export function checkBoxCheck(but: HTMLInputElement, inputs: IInnerForm[]): void {
    but.addEventListener('change', () => {
        const passwordInputs = [inputs[0], inputs[1], inputs[2]];
        passwordInputs.forEach((input) => {
            const inputElement = input.inputHTML;
            if (but.checked) {
                inputElement.type = 'text';
            } else {
                inputElement.type = 'password';
            }
        });
    });
}
