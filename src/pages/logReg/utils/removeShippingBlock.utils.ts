import { constants } from '../../../data/constants';
import { validateThisInput } from '../validation/validateThisInput';
import { saveAsDefaultAddress } from './saveAsDefaultAddress.utils';

export function removeShippingBlock(checkbox: HTMLInputElement) {
    checkbox.addEventListener('change', () => {
        const shipping = document.getElementById('shipping') as HTMLDivElement;
        if (checkbox.checked) {
            if (sessionStorage.getItem('spip')) {
                sessionStorage.ship = shipping.innerHTML;
            } else {
                sessionStorage.setItem('ship', shipping.innerHTML);
            }
            shipping.innerHTML = '';
        } else {
            shipping.innerHTML = sessionStorage.ship;
            const shipIputs = shipping.querySelectorAll('input') as NodeList;
            shipIputs.forEach((input) => {
                const inp = input as HTMLInputElement;
                const error = inp.nextElementSibling as HTMLSpanElement;
                validateThisInput(inp, error);
                if (inp.id === 'set-as-default-shipping-address') saveAsDefaultAddress(inp);
            });
            constants.shipDefault = false;
        }
    });
}
