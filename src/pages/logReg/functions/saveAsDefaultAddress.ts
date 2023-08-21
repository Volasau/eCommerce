import { constants } from '../../../data/constants';

export function saveAsDefaultAddress(checkbox: HTMLInputElement) {
    checkbox.addEventListener('change', (event) => {
        const target = event.target as HTMLInputElement;
        if (target.id === 'set-as-default-shipping-address') {
            if (checkbox.checked) {
                constants.shipDefault = true;
            } else {
                constants.shipDefault = false;
            }
        } else {
            if (checkbox.checked) {
                constants.billDefault = true;
            } else {
                constants.billDefault = false;
            }
        }
    });
}
