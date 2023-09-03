import { IFormBuilder } from '../../../core/interfaces/FormBuilderInterface';
import { addBillingBlock } from '../utils/addBillingBlock.utils';
import { addButton } from '../utils/addButton.utils';
import { addCredentialsAndPersData } from '../utils/addCredentialsAndPersData.utils';
import { addServerError } from '../utils/addServerError.utils';
import { addShippingBlock } from '../utils/addShippingBlock.utils';
import { checkServErrors } from '../utils/checkServErrors.utils';
import { makeVisiblePassword } from '../utils/makeVisiblePassword.utils';
import { removeShippingBlock } from '../utils/removeShippingBlock.utils';
import { saveAsDefaultAddress } from '../utils/saveAsDefaultAddress.utils';

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
