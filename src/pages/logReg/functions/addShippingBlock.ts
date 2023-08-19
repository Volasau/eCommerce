import { shippingInner } from '../../../data/shippingInner';
import { IFunc } from '../validation/makeVisiblePassword';

export const addShippingBlock: IFunc = function (checkbox: HTMLInputElement, element: HTMLElement) {
    checkbox.addEventListener('change', () => {
        const shippingBlock = document.createElement('div') as HTMLDivElement;
        const button = document.querySelector('button') as HTMLButtonElement;
        console.log(button);
        shippingBlock.setAttribute('id', 'shipping');
        shippingBlock.innerHTML = shippingInner;
        if (checkbox.checked) {
            button.before(shippingBlock);
        } else {
            const shippingBlock = document.getElementById('shipping') as HTMLDivElement;
            shippingBlock.remove();
        }
        element.innerHTML = element.innerHTML + '';
    });
};
