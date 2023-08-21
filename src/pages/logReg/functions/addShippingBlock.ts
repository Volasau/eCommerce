import { addCheckboxToInput } from './addCheckboxToInput';

export function addShippingBlock(formHTML: HTMLFormElement, innerFormList: HTMLElement[]) {
    const shippingBlock = document.createElement('div') as HTMLDivElement;
    shippingBlock.setAttribute('id', 'shipping');
    shippingBlock.innerHTML = '<h3>SHIPPING ADDRESS</h3>';

    innerFormList.forEach((innerForm) => {
        if (
            innerForm.children[1].id === 'countryShip' ||
            innerForm.children[1].id === 'cityShip' ||
            innerForm.children[1].id === 'streetShip' ||
            innerForm.children[1].id === 'postcodeShip'
        ) {
            shippingBlock.append(innerForm);
        }
        addCheckboxToInput('postcodeShip', 'Set as default shipping address', innerForm);
    });
    if (innerFormList.length > 2) formHTML.append(shippingBlock);
}
