import { IFormBuilder } from '../../../core/interfaces/FormBuilderInterface';
import { completeForm } from '../functions/completeForm';
import { addServErrorAndButton } from '../functions/addServErrorAndButton';
import { checkServErrors } from '../functions/checkServErrors';

export class FormBuilder implements IFormBuilder {
    formHTML: HTMLFormElement;
    formId: string;
    innerFormList: HTMLElement[];
    constructor(formId: string, innerFormList: HTMLElement[]) {
        this.formHTML = document.createElement('form');
        this.formId = formId;
        this.innerFormList = innerFormList;
    }

    build() {
        completeForm(this.formHTML, this.innerFormList);
        addServErrorAndButton(this.formHTML, this.innerFormList);
        checkServErrors(this.formHTML);

        return this.formHTML;
    }
}
