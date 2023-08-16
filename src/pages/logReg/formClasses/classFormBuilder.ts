import { IFormBuilder } from '../../../core/interfaces/FormBuilderInterface';
import { makeVisiblePassword } from '../validation/makeVisiblePassword';

export class FormBuilder implements IFormBuilder {
    formHTML: HTMLFormElement;
    formId: string;
    innerFormList: HTMLElement[];
    button: HTMLButtonElement;
    buttonText: string;
    checkbox: HTMLInputElement;
    checkboxLabel: HTMLLabelElement;
    constructor(formId: string, innerFormList: HTMLElement[], buttonText: string) {
        this.formHTML = document.createElement('form');
        this.formId = formId;
        this.innerFormList = innerFormList;
        this.button = document.createElement('button');
        this.button.type = 'button';
        this.buttonText = buttonText;
        this.button.textContent = buttonText;
        this.checkbox = document.createElement('input');
        this.checkbox.type = 'checkbox';
        this.checkbox.id = 'show-password-checkbox';
        this.checkboxLabel = document.createElement('label');
        this.checkboxLabel.textContent = 'Show Password';
        this.checkboxLabel.setAttribute('for', 'show-password-checkbox');
    }

    build() {
        this.innerFormList.forEach((innerForm) => {
            if (innerForm.children[1].id === 'password') {
                innerForm.append(this.checkbox, this.checkboxLabel);
                const inputHTML = innerForm.children[1] as HTMLInputElement;
                const checkbox = innerForm.children[3] as HTMLInputElement;
                makeVisiblePassword(checkbox, inputHTML);
            }
            this.formHTML.append(innerForm);
        });
        this.formHTML.append(this.button);
        return this.formHTML;
    }
}
