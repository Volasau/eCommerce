import { decreaseItemInBasket } from '../../../../server/cart/changeQuantity';
import { recalculate } from '../../functions/recalculate';
import { minusOne } from './minusOne';

export function minusOneProduct(target: HTMLElement) {
    (async () => {
        const id = target.id.replace('-cart-prod-minus', '');
        minusOne(target);
        const cart = await decreaseItemInBasket(id);
        recalculate(id, cart?.totalPrice.centAmount);
    })();
}
