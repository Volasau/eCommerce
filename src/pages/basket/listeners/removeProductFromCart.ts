import { addUpAllTheSums } from './changeQuantity/addUpAllTheSums';

export function removeProductFromCart() {
    document.addEventListener('click', (event) => {
        const target = event.target as HTMLButtonElement;
        if (target.id.includes('-del-cart-prod')) {
            const id = target.id.replace('-del-cart-prod', '');
            const product = document.getElementById(`${id}-cart-row-wrap`) as HTMLDivElement;
            product.remove();

            const totalSumBlock = document.getElementById('cart-sum') as HTMLDivElement;
            totalSumBlock.innerHTML = String(addUpAllTheSums());
        }
    });
}
