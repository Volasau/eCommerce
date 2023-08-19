import { shippingInner } from '../../../data/shippingInner';
import { IFunc } from '../validation/makeVisiblePassword';
import { validateThisInput } from '../validation/validateThisInput';

export const addShippingBlock: IFunc = function (checkbox: HTMLInputElement, element: HTMLElement) {
    checkbox.addEventListener('change', () => {
        const shippingBlock = document.createElement('div') as HTMLDivElement;
        const button = document.querySelector('button') as HTMLButtonElement;
        shippingBlock.setAttribute('id', 'shipping');
        shippingBlock.innerHTML = shippingInner;
        if (checkbox.checked) {
            button.before(shippingBlock);

            const shipping = document.getElementById('shipping') as Node;
            const shipChilds = shipping.childNodes as NodeList;
            shipChilds.forEach((inner) => {
                const innerForm = inner as HTMLElement;
                if (innerForm.className === 'form-group') {
                    const input = innerForm.querySelector('input') as HTMLInputElement;
                    const error = innerForm.querySelector('span') as HTMLSpanElement;
                    validateThisInput(input, error);
                }
            });
        } else {
            const shipping = document.getElementById('shipping') as HTMLDivElement;
            shipping.remove();
        }
        element.innerHTML = element.innerHTML + '';
    });
};
