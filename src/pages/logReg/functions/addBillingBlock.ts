import { addCheckboxToInput } from './addCheckboxToInput';

export function addBillingBlock(formHTML: HTMLFormElement, innerFormList: HTMLElement[]) {
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
        }
        addCheckboxToInput('password', 'Show password', innerForm);
        addCheckboxToInput('postcode', 'Use as billing address', innerForm);
        addCheckboxToInput('postcode', 'Set as default address', innerForm);
    });
    if (innerFormList.length > 2) formHTML.append(billingBlock);
}
