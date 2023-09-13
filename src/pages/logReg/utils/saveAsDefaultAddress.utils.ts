import { constants } from '../../../data/constants';

export function saveAsDefaultAddress(checkbox: HTMLInputElement): void {
    checkbox.addEventListener('change', (event) => {
        const target = event.target as HTMLInputElement;
        if (target.id === 'set-as-default-shipping-address') {
            constants.shipDefault = checkbox.checked;
        } else {
            constants.billDefault = checkbox.checked;
        }
    });
}
