import { changeCarButView } from '../functions/other/changeCarButView';
import { defineCartBut } from '../functions/other/defineCartBut';

export function addProductToCartFromCatalog(): void {
    document.addEventListener('click', async (event) => {
        const target = event.target as HTMLButtonElement;
        if (target.className === 'cart-but' || target.className === 'cart-button' || target.id.includes('cart-but')) {
            const hashChain = document.getElementById('row-chain') as Node;
            const hashLength = hashChain.childNodes.length;
            const cartBut = defineCartBut(target);
            await changeCarButView(cartBut, hashLength === 9 ? 'DELETE' : 'IN CART');
        }
    });
}
