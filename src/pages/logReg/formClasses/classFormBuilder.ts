import { IFormBuilder } from '../../../core/interfaces/FormBuilderInterface';
import { addCredentialsAndPersData } from '../functions/addCredentialsAndPersData';
import { addServerError } from '../functions/addServerError';
import { addButton } from '../functions/addButton';
import { addBillingBlock } from '../functions/addBillingBlock';
import { addShippingBlock } from '../functions/addShippingBlock';
import { saveAsDefaultAddress } from '../functions/saveAsDefaultAddress';
import { makeVisiblePassword } from '../functions/makeVisiblePassword';
import { removeShippingBlock } from '../functions/removeShippingBlock';
import { checkServErrors } from '../functions/checkServErrors';

export class FormBuilder implements IFormBuilder {
    formHTML: HTMLFormElement;
    formId: string;
    innerFormList: HTMLElement[];
    constructor(formId: string, innerFormList: HTMLElement[]) {
        this.formHTML = document.createElement('form');
        this.formId = formId;
        this.innerFormList = innerFormList;
        addCredentialsAndPersData(this.formHTML, this.innerFormList);
        addBillingBlock(this.formHTML, this.innerFormList);
        addShippingBlock(this.formHTML, this.innerFormList);
        addServerError(this.formHTML);
        addButton(this.formHTML, this.innerFormList);
        if (this.innerFormList.length > 2) {
            const checkboxOneAddress = this.formHTML.querySelector('#use-as-billing-address') as HTMLInputElement;
            const checkboxBill = this.formHTML.querySelector('#set-as-default-address') as HTMLInputElement;
            const checkboxShip = this.formHTML.querySelector('#set-as-default-shipping-address') as HTMLInputElement;
            removeShippingBlock(checkboxOneAddress);
            saveAsDefaultAddress(checkboxBill);
            saveAsDefaultAddress(checkboxShip);
        }
        const checkboxPass = this.formHTML.querySelector('#show-password') as HTMLInputElement;
        const password = this.formHTML.querySelector('#password') as HTMLInputElement;
        makeVisiblePassword(checkboxPass, password);
        checkServErrors(this.formHTML);
    }

    build() {
        return this.formHTML;
    }
}
