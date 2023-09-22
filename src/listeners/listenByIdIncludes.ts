import { applyPromoCode } from '../pages/basket/listeners/applyPromoCode';
import { removeProductFromCart } from '../pages/basket/listeners/removeProductFromCart';
import { addProductToCartFromCatalog } from '../pages/catalog/listeners/addProductToCartFromCatalog';

export function listenByIdIncludes(target: HTMLElement) {
    if (target.id.includes('-del-cart-prod')) removeProductFromCart(target);
    if (target.id.includes('-lap-but')) applyPromoCode(target);
    if (target.id.includes('cart-but')) addProductToCartFromCatalog(target);
}
