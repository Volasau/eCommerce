import { ChangePassword } from '../changePassword/changePassword';
import { AddressNew } from '../changeAddress/formAddNewAdress';

export function addBlock(button: HTMLElement, container: HTMLElement): void {
    button.addEventListener('click', () => {
        const but = button as HTMLButtonElement;
        but.disabled = true;
        let newBlock = document.createElement('div');
        if (button.id === 'btn_ch') {
            const block = new ChangePassword();
            newBlock = block.container;
        } else if (button.id === 'btn_ad') {
            const block = new AddressNew();
            newBlock = block.container;
        }
        container.appendChild(newBlock);
    });
}
