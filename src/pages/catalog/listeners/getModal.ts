import { constants } from '../../../data/constants';
import { Modal } from '../classes/modalClass';

export function getModal() {
    document.addEventListener('click', (event) => {
        const target = event.target as HTMLElement;
        if (target.classList.contains('main-image')) {
            constants.productList.forEach((product) => {
                if (product.id === target.id.split('-').slice(0, -1).join('-')) {
                    const modal = new Modal(product);
                    modal.startModal();
                }
            });
        }
    });
}
