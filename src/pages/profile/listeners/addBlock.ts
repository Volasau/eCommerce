import { AddressNew } from '../formAddNewAdress';

export function addBlock(button: HTMLElement, container: HTMLElement) {
    button.addEventListener('click', () => {
        const but = button as HTMLButtonElement;
        but.disabled = true;
        const newAddressBlock = new AddressNew();
        container.appendChild(newAddressBlock.container);
    });
}
