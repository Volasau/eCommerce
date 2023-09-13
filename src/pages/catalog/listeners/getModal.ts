import { constants } from '../../../data/constants';
import { Modal } from '../classes/modalClass';

export function getModal(): void {
    document.addEventListener('click', (event) => {
        const target = event.target as HTMLElement;
        if (target.classList.contains('main-image')) {
            const id = target.id;
            constants.productList.forEach((product) => {
                if (product.id === id.slice(0, id.lastIndexOf('-'))) {
                    const modal = new Modal(product);
                    modal.startModal();
                }
            });
        }
    });
}
