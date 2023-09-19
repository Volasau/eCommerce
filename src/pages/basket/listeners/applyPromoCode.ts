import { CartGetManager } from '../../../server/cart/getCartById';
import { recalculatePromo } from './changeQuantity/recalculatePromo';
import { recalculateValues } from './changeQuantity/recalculateValues';

export function applyPromoCode() {
    document.addEventListener('click', async (event) => {
        const target = event.target as HTMLButtonElement;
        if (target.id.includes('-lap-but')) {
            const id = target.id.replace('-lap-but', '');
            const input = document.getElementById(`${id}-promo-input`) as HTMLInputElement;
            const price = document.getElementById(`${id}-cart-prod-price`) as HTMLDivElement;
            const prodName = document.getElementById(`${id}-cart-prod-name`) as HTMLDivElement;
            // const totalSumBlock = document.getElementById('cart-sum') as HTMLDivElement;
            const promoSumBlock = document.getElementById('cart-promo-sum') as HTMLDivElement;
            const cartId = sessionStorage.getItem('newCartId') as string;
            const myCart = new CartGetManager();
            const cart = await myCart.getCartById(cartId);
            console.log(cart);
            if (target.innerHTML === 'Apply') {
                if (input.value === 'promo-laptop') {
                    input.remove();
                    target.innerHTML = 'Special price DELETE';
                    target.style.backgroundColor = 'rgb(248, 75, 153)';
                    if (!sessionStorage.id) {
                        sessionStorage.setItem(id, price.innerHTML);
                        price.innerHTML = ((+price.innerHTML / 100) * 95).toFixed(2);
                    }
                    recalculatePromo(id);
                }
            } else {
                promoSumBlock.innerHTML = '';
                if (target.parentElement) target.parentElement.remove();
                prodName.innerHTML += `<div id="lap-promo">
                                        <input id="${id}-promo-input" type="text" placeholder="PROMO">
                                        <button id="${id}-lap-but" class="lap-promo-but">Apply</button>
                                    </div>`;
                price.innerHTML = sessionStorage.getItem(id) as string;
                sessionStorage.removeItem(id);
                recalculateValues(id, cart?.totalPrice.centAmount);
                // recalculatePromo(id);
            }
        }
    });
}
