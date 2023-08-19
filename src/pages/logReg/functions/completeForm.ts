import { makeVisiblePassword } from '../validation/makeVisiblePassword';
import { addCheckboxToInput } from './addCheckboxToInput';
import { addShippingBlock } from './addShippingBlock';

export function completeForm(formHTML: HTMLFormElement, innerFormList: HTMLElement[]) {
    const billingBlock = document.createElement('div') as HTMLDivElement;
    billingBlock.setAttribute('id', 'billing');
    billingBlock.innerHTML = '<h3>BILLING ADDRESS</h3>';

    innerFormList.forEach((innerForm) => {
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
        addCheckboxToInput('postcode', 'Add shipping address', innerForm, addShippingBlock);
    });
    if (window.location.hash.slice(1) === 'registr') {
        formHTML.append(billingBlock);
    }
}
