import { IInnerForm } from '../../../core/interface/InnerFormInterface';

export class InnerForm implements IInnerForm {
    labelText: string;
    inputType: string;
    inputId: string;
    inputName: string;
    errorId: string;
    formGroup: HTMLElement;
    label: HTMLElement;
    inputHTML: HTMLInputElement;
    error: HTMLElement;
    constructor(
        labelText: string,
        inputType: string,
        inputId: string,
        inputName: string,
        errorId: string,
        placeholder: string
    ) {
        this.labelText = labelText;
        this.inputType = inputType;
        this.inputId = inputId;
        this.inputName = inputName;
        this.errorId = errorId;
        this.formGroup = document.createElement('div');
        this.label = document.createElement('label');
        this.inputHTML = document.createElement('input');
        this.inputHTML.setAttribute('placeholder', placeholder);
        this.error = document.createElement('span');
    }

    create() {
        this.formGroup.classList.add('form-group');
        this.label.setAttribute('for', this.inputId);
        this.label.textContent = this.labelText + ':';
        this.inputHTML.setAttribute('autocomplete', 'off');
        this.inputHTML.type = this.inputType;
        this.inputHTML.id = this.inputId;
        this.inputHTML.name = this.inputName;
        this.inputHTML.required = true;
        this.error.classList.add('error');
        this.error.id = this.errorId;
        this.formGroup.append(this.label, this.inputHTML, this.error);
        return this.formGroup;
    }
}
