import { removeItemFromBasket } from '../../../server/cart/removeLineItem';
import { showToast } from '../../logReg/utils/funcToastify.utils';
import { addEmptyInfo } from '../utils/addEmptyInfo.utils';
import { addUpAllTheSums } from './changeQuantity/addUpAllTheSums';

export function removeProductFromCart(target: HTMLElement): void {
    (async () => {
        const id = target.id.replace('-del-cart-prod', '');
        const product = document.getElementById(`${id}-cart-row-wrap`) as HTMLDivElement;
        await removeItemFromBasket(id);
        product.remove();
        const totalSumBlock = document.getElementById('cart-sum') as HTMLDivElement;
        totalSumBlock.innerHTML = String(addUpAllTheSums().toFixed(2));

        const header = document.getElementById('cart-header') as HTMLDivElement;
        const prodRows = document.querySelectorAll('.cart-prod-wrap') as NodeList;
        if (prodRows.length === 0) {
            header.after(addEmptyInfo());
            const clearBut = document.getElementById('cart-cleaner') as HTMLButtonElement;
            clearBut.disabled = true;
            showToast('All products were removed from basket');
        } else {
            showToast('Product removed from basket');
        }
    })();
}
