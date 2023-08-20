import { constants } from '../../../data/constants';
import { IFunc } from '../validation/makeVisiblePassword';

export const saveAsDefaultAddress: IFunc = function (checkbox: HTMLInputElement, element: HTMLElement) {
    checkbox.addEventListener('change', (event) => {
        const target = event.target as HTMLInputElement;
        if (target.id === 'set-as-default-address-ship') {
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
    element.innerHTML = element.innerHTML + '';
};
