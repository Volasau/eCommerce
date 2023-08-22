import { IInnerForm } from '../../../core/interfaces/InnerFormInterface';
import { validateThisInput } from '../validation/validateThisInput';

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
    constructor(labelText: string, inpType: string, inpId: string, inpName: string, errId: string, plHolder: string) {
        this.labelText = labelText;
        this.inputType = inpType;
        this.inputId = inpId;
        this.inputName = inpName;
        this.errorId = errId;
        this.formGroup = document.createElement('div');
        this.label = document.createElement('label');
        this.inputHTML = document.createElement('input');
        this.inputHTML.setAttribute('placeholder', plHolder);
        this.inputHTML.setAttribute('class', 'input');
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

        const list = document.createElement('div');
        if (this.inputId === 'country') {
            list.setAttribute('id', 'country-list');
            this.formGroup.append(this.label, this.inputHTML, this.error, list);
        } else if (this.inputId === 'countryShip') {
            list.setAttribute('id', 'country-listShip');
            this.formGroup.append(this.label, this.inputHTML, this.error, list);
        } else {
            this.formGroup.append(this.label, this.inputHTML, this.error);
        }

        this.valid();
        return this.formGroup;
    }

    valid() {
        validateThisInput(this.inputHTML, this.error);
    }
}
