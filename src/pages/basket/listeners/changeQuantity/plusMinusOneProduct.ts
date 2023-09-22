import { increaseItemInBasket } from '../../../../server/cart/changeQuantity';
import { recalculate } from '../../functions/recalculate';
import { plusOne } from './plusOne';

export function plusOneProduct(target: HTMLElement): void {
    (async () => {
        const id = target.id.replace('-cart-prod-plus', '');
        plusOne(target);
        const cart = await increaseItemInBasket(id);
        recalculate(id, cart?.totalPrice.centAmount);
    })();
}
