import { changeCarButView } from '../functions/other/changeCarButView';
import { defineCartBut } from '../functions/other/defineCartBut';

export function addProductToCartFromCatalog(): void {
    document.addEventListener('click', (event) => {
        const target = event.target as HTMLButtonElement;
        if (target.className === 'cart-but' || target.id.includes('cart-but')) {
            const cartBut = defineCartBut(target);
            changeCarButView(cartBut);
            // Азим, твоя функциональность по отправке в корзину commerce
        }
    });
}
