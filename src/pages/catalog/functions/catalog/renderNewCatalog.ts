import { constants } from '../../../../data/constants';
import { getCartManager } from '../../../../server/cart/getCartById';
import { createCartLogic } from '../../../../server/function/addCartLogic';
import { Cart } from '../../../basket/interfaces/cartInterface';
import { buttonHTML, divHTML } from '../../classes/elementBuilder';
import { buildProductItem } from '../product/buildProductItem';

export function renderNewCatalog(count: number) {
    (async () => {
        await createCartLogic();
        const cart = (await getCartManager.getCartById(sessionStorage.newCartId)) as Cart;
        const prodList = document.getElementById('product-view-list') as HTMLDivElement;
        const products = divHTML.getElement('', 'product-view', 'viewer-prod') as HTMLDivElement;
        prodList.innerHTML = '';

        for (let i = 0; i < 6; i += 1) {
            if (constants.productList[i]) {
                const product = buildProductItem(constants.productList[i], cart);
                products.append(product);
            }
        }
        prodList.append(products);
        const button = buttonHTML.getElement('>>>NEXT', 'next-prod', 'next-prod') as HTMLButtonElement;
        prodList.append(button);
        const quantity = document.querySelector('.quantity') as HTMLSpanElement;
        quantity.textContent = `${count}`;
    })();
}
