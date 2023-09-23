import { addCheckboxToInput } from './addCheckboxToInput.utils';

export function addShippingBlock(formHTML: HTMLFormElement, innerFormList: HTMLElement[]): void {
    const shippingBlock = document.createElement('div') as HTMLDivElement;
    shippingBlock.setAttribute('id', 'shipping');
    shippingBlock.innerHTML = '<h3>SHIPPING ADDRESS</h3>';

    innerFormList.forEach((innerForm) => {
        const ships = ['countryShip', 'cityShip', 'streetShip', 'postcodeShip'];
        const id = innerForm.children[1].id;
        if (ships.includes(id)) {
            shippingBlock.append(innerForm);
        }
        addCheckboxToInput('postcodeShip', 'Set as default shipping address', innerForm);
    });
    if (innerFormList.length > 2) formHTML.append(shippingBlock);
}
