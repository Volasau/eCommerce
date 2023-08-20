import { IFunc } from '../validation/makeVisiblePassword';

export const removeShippingBlock: IFunc = function (checkbox: HTMLInputElement, element: HTMLElement) {
    checkbox.addEventListener('change', (event) => {
        console.log(event.target);
        if (document.getElementById('shipping')) {
            const shipping = document.getElementById('shipping') as HTMLDivElement;
            if (checkbox.checked) {
                shipping.style.display = 'none';
            } else {
                shipping.style.display = '';
            }
        }
    });
    element.innerHTML = element.innerHTML + '';
};
