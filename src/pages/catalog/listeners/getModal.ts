import { constants } from '../../../data/constants';
import { Modal } from '../classes/modalClass';

export function getModal(target: HTMLElement): void {
    if (target.classList.contains('main-image')) {
        const id = target.id;
        constants.productList.forEach((product) => {
            if (product.id === id.slice(0, id.lastIndexOf('-'))) {
                const modal = new Modal(product);
                modal.startModal();
            }
        });
    }
}
