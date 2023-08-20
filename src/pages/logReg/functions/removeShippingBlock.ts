import { IFunc } from '../validation/makeVisiblePassword';
import { addShipping } from './addShipping';

export const removeShippingBlock: IFunc = function (checkbox: HTMLInputElement, element: HTMLElement) {
    checkbox.addEventListener('change', () => {
        const shipping = document.getElementById('shipping') as HTMLDivElement;
        const billing = document.getElementById('billing') as HTMLDivElement;
        if (checkbox.checked) {
            if (shipping) shipping.remove();
        } else {
            if (!shipping) billing.after(addShipping());
        }
    });
    element.innerHTML = element.innerHTML + '';
};
