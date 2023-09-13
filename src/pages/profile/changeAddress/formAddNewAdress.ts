import { divHTML } from '../../catalog/classes/elementBuilder';
import { addCheckboxes } from './addCheckboxes';
import { clickAddressSubmit } from './clickAddressSubmit';
import { getFormAddress } from './getFormAddress';
import { clickCancelBut } from '../changePassword/clickCancelBut';
import { createButton } from '../changePassword/createButton';

export class AddressNew {
    container: HTMLDivElement;

    constructor() {
        this.container = this.createContainer();
    }

    private createContainer(): HTMLDivElement {
        const addressesContainer = divHTML.getElement(
            'Add New Adress',
            'adr-cont',
            'adresS__container'
        ) as HTMLDivElement;

        const form = getFormAddress();
        const checkBoxes = addCheckboxes(form);

        const submitButton = createButton('Submit') as HTMLButtonElement;
        clickAddressSubmit(submitButton, form, checkBoxes, addressesContainer);

        const btnAddAddress = document.querySelector('.btn__add-address') as HTMLButtonElement;
        const cancelButton = createButton('Cancel') as HTMLButtonElement;
        clickCancelBut(cancelButton, btnAddAddress, addressesContainer);

        form.form.appendChild(submitButton);
        form.form.appendChild(cancelButton);
        addressesContainer.appendChild(form.form);

        return addressesContainer;
    }
}
