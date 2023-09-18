import { removeItemFromBasket } from '../../../../server/cart/removeLineItem';
import { showToast } from '../../../logReg/utils/funcToastify.utils';
import { addEmptyInfo } from '../../utils/addEmptyInfo';

export function reallyClearTheCart(): void {
    document.addEventListener('click', (event) => {
        const target = event.target as HTMLButtonElement;
        if (target.id === 'yes-but') {
            const cartProducts = document.querySelectorAll('.cart-prod-wrap') as NodeList;

            (async () => {
                for await (const prod of cartProducts) {
                    const product = prod as HTMLDivElement;
                    const id = product.id.replace('-cart-row-wrap', '');
                    await removeItemFromBasket(id);
                    product.remove();
                }
            })();

            const quantity = document.getElementById('cart-sum') as HTMLDivElement;
            quantity.innerHTML = '0';
            const header = document.getElementById('cart-header') as HTMLDivElement;
            header.after(addEmptyInfo());

            const modal = document.getElementById('clear-dark') as HTMLDivElement;
            modal.remove();

            const clearBut = document.getElementById('cart-cleaner') as HTMLButtonElement;
            clearBut.disabled = true;
            showToast('All products removed from basket');
        }
    });
}
