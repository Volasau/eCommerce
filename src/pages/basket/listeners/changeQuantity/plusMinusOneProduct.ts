import { decreaseItemInBasket, increaseItemInBasket } from '../../../../server/cart/changeQuantity';
import { minusOne } from './minusOne';
import { plusOne } from './plusOne';
import { recalculateValues } from './recalculateValues';

export function plusMinusOneProduct(): void {
    const count = 1;
    document.addEventListener('click', async (event) => {
        const target = event.target as HTMLButtonElement;
        if (target.className === 'plus-button') {
            const id = target.id.replace('-cart-prod-plus', '');
            plusOne(target, count);
            await increaseItemInBasket(id);
            recalculateValues(id);
        } else if (target.className === 'minus-button') {
            const id = target.id.replace('-cart-prod-minus', '');
            minusOne(target, count);
            await decreaseItemInBasket(id);
            recalculateValues(id);
        }
    });
}
