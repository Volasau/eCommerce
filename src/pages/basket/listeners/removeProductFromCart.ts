import { removeItemFromBasket } from '../../../server/cart/removeLineItem';
import { showToast } from '../../logReg/utils/funcToastify.utils';
import { addEmptyInfo } from '../utils/addEmptyInfo.utils';
import { addUpAllTheSums } from './changeQuantity/addUpAllTheSums';

export function removeProductFromCart(): void {
    document.addEventListener('click', async (event) => {
        const target = event.target as HTMLButtonElement;
        if (target.id.includes('-del-cart-prod')) {
            const id = target.id.replace('-del-cart-prod', '');
            const product = document.getElementById(`${id}-cart-row-wrap`) as HTMLDivElement;
            await removeItemFromBasket(id);
            product.remove();
            const totalSumBlock = document.getElementById('cart-sum') as HTMLDivElement;
            totalSumBlock.innerHTML = String(addUpAllTheSums().toFixed(2));

            const promoSum = document.getElementById('promo-total-sum') as HTMLDivElement;
            if (promoSum && +totalSumBlock.innerHTML <= 200) promoSum.remove();

            const header = document.getElementById('cart-header') as HTMLDivElement;
            const prodRows = document.querySelectorAll('.cart-prod-wrap') as NodeList;
            if (prodRows.length === 0) {
                header.after(addEmptyInfo());
                const clearBut = document.getElementById('cart-cleaner') as HTMLButtonElement;
                clearBut.disabled = true;
                if (promoSum) promoSum.remove();
                showToast('All products were removed from basket');
            } else {
                showToast('Product removed from basket');
            }
        }
    });
}
