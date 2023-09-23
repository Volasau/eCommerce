import { changeCartButView } from '../functions/other/changeCartButtonView';
import { defineCartBut } from '../functions/other/defineCartBut';

export function addProductToCartFromCatalog(target: HTMLElement): void {
    (async () => {
        const hashChain = document.getElementById('row-chain') as Node;
        const hashLength = hashChain.childNodes.length;
        const cartBut = defineCartBut(target);
        await changeCartButView(cartBut, hashLength === 9 ? 'DELETE' : 'IN CART');
    })();
}
