import { decreaseItemInBasket, increaseItemInBasket } from '../../../../server/cart/changeQuantity';
import { minusOne } from './minusOne';
import { plusOne } from './plusOne';
import { recalculatePromo } from './recalculatePromo';
import { recalculateValues } from './recalculateValues';

export function plusMinusOneProduct(): void {
    const count = 1;
    document.addEventListener('click', async (event) => {
        const target = event.target as HTMLButtonElement;
        if (target.className === 'plus-button') {
            const id = target.id.replace('-cart-prod-plus', '');
            plusOne(target, count);
            const cart = await increaseItemInBasket(id);

            let promoLapTrue = false;
            (() => {
                const allPromoBut = document.querySelectorAll('.lap-promo-but') as NodeList;
                allPromoBut.forEach((but) => {
                    const button = but as HTMLButtonElement;
                    if (button.innerHTML === 'Special price DELETE') {
                        promoLapTrue = true;
                        return;
                    }
                });
            })();
            promoLapTrue ? recalculatePromo(id) : recalculateValues(id, cart?.totalPrice.centAmount);
        } else if (target.className === 'minus-button') {
            const id = target.id.replace('-cart-prod-minus', '');
            minusOne(target, count);
            const cart = await decreaseItemInBasket(id);

            let promoLapTrue = false;
            (() => {
                const allPromoBut = document.querySelectorAll('.lap-promo-but') as NodeList;
                allPromoBut.forEach((but) => {
                    const button = but as HTMLButtonElement;
                    if (button.innerHTML === 'Special price DELETE') {
                        promoLapTrue = true;
                        return;
                    }
                });
            })();
            promoLapTrue ? recalculatePromo(id) : recalculateValues(id, cart?.totalPrice.centAmount);
        }
    });
}
