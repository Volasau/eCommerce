import { constants } from '../../../data/constants';
import { Modal } from '../classes/modalClass';

export function getModal() {
    document.addEventListener('click', (event) => {
        const target = event.target as HTMLElement;
        if (target.classList.contains('min')) {
            constants.productList.forEach((product) => {
                console.log(product.id);
                console.log(target.id.split('-').slice(0, -1).join('-'));
                if (product.id === target.id.split('-').slice(0, -1).join('-')) {
                    const modal = new Modal(product);
                    modal.startModal();
                }
            });
        }
    });
}
