import { minusOneProduct } from '../pages/basket/listeners/changeQuantity/minusOneProduct';
import { plusOneProduct } from '../pages/basket/listeners/changeQuantity/plusMinusOneProduct';
import { addProductToCartFromCatalog } from '../pages/catalog/listeners/addProductToCartFromCatalog';
import { paginateModalNext } from '../pages/catalog/listeners/paginateModalNext';
import { paginateModalPrev } from '../pages/catalog/listeners/paginateModalPrev';
import { removeModal } from '../pages/catalog/listeners/removeModal';
import { switchPhoto } from '../pages/catalog/listeners/switchPhoto';

export function listenByClassName(target: HTMLElement) {
    switch (target.className) {
        case 'modal-wrap':
            removeModal(target);
            break;
        case 'next':
            paginateModalNext(target);
            break;
        case 'prev':
            paginateModalPrev(target);
            break;
        case 'plus-button':
            plusOneProduct(target);
            break;
        case 'minus-button':
            minusOneProduct(target);
            break;
        case 'add-image':
            switchPhoto(target);
            break;
        case 'cart-but':
        case 'cart-button':
            addProductToCartFromCatalog(target);
            break;
    }
}
