import { makeVisiblePassword } from '../validation/makeVisiblePassword';
import { validateShipping } from '../validation/validationFunction/validateShipping';
import { addCheckboxToInput } from './addCheckboxToInput';
import { addShipping } from './addShipping';
import { removeShippingBlock } from './removeShippingBlock';
import { saveAsDefaultAddress } from './saveAsDefaultAddress';

export async function completeForm(formHTML: HTMLFormElement, innerFormList: HTMLElement[]) {
    const billingBlock = document.createElement('div') as HTMLDivElement;
    billingBlock.setAttribute('id', 'billing');
    billingBlock.innerHTML = '<h3>BILLING ADDRESS</h3>';

    innerFormList.forEach(async (innerForm) => {
        if (
            innerForm.children[1].id === 'country' ||
            innerForm.children[1].id === 'city' ||
            innerForm.children[1].id === 'street' ||
            innerForm.children[1].id === 'postcode'
        ) {
            billingBlock.append(innerForm);
        } else {
            formHTML.append(innerForm);
        }
        addCheckboxToInput('password', 'Show password', innerForm, makeVisiblePassword);
        addCheckboxToInput('postcode', 'Use as billing address', innerForm, removeShippingBlock);
        addCheckboxToInput('postcode', 'Set as default address', innerForm, saveAsDefaultAddress);
    });

    if (window.location.hash.slice(1) === 'registr') {
        formHTML.append(billingBlock);
        billingBlock.after(addShipping());
        const saveDefault = formHTML.querySelector('#set-as-default-address-ship') as HTMLInputElement;
        const post = formHTML.querySelector('#postcode-errorShip') as HTMLInputElement;
        saveAsDefaultAddress(saveDefault, post);
        validateShipping(formHTML);
    }
}
