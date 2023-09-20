import { decreaseItemInBasket, increaseItemInBasket } from '../../../../server/cart/changeQuantity';
import { recalculate } from '../../functions/recalculate';
import { minusOne } from './minusOne';
import { plusOne } from './plusOne';

export function plusMinusOneProduct(): void {
    const count = 1;
    document.addEventListener('click', async (event) => {
        const target = event.target as HTMLButtonElement;
        if (target.className === 'plus-button') {
            const id = target.id.replace('-cart-prod-plus', '');
            plusOne(target, count);
            const cart = await increaseItemInBasket(id);

            recalculate(id, cart?.totalPrice.centAmount);
        } else if (target.className === 'minus-button') {
            const id = target.id.replace('-cart-prod-minus', '');
            minusOne(target, count);
            const cart = await decreaseItemInBasket(id);

            recalculate(id, cart?.totalPrice.centAmount);
        }
    });
}
