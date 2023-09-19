import { applyPromoToCart } from '../../../server/promo/addPromoApi';

export function applyPromoCode(id: string): void {
    document.addEventListener('click', async (event) => {
        const target = event.target as HTMLButtonElement;
        if (target.className === 'lap-promo-but') {
            const inputElem = document.getElementById(`${id}-promo-input`) as HTMLInputElement;
            const code = inputElem.value;
            await applyPromoToCart(code);
        }
    });
}
