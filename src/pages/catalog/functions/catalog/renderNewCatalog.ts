import { constants } from '../../../../data/constants';
import { getCartManager } from '../../../../server/cart/getCartById';
import { createCartLogic } from '../../../../server/function/addCartLogic';
import { Cart } from '../../../basket/interfaces/cart.interfaces';
import { buttonHTML, divHTML } from '../../classes/elementBuilder';
import { buildProductItem } from '../product/buildProductItem';

export function renderNewCatalog(count: number): void {
    (async () => {
        constants.page = 0;
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
        const buttonBlock = divHTML.getElement('', 'next-prev', 'next-prev') as HTMLDivElement;
        const nextBut = buttonHTML.getElement('>>>NEXT', 'next-prod', 'next-prod') as HTMLButtonElement;
        const prevBut = buttonHTML.getElement('PREV<<<', 'prev-prod', 'prev-prod') as HTMLButtonElement;
        prevBut.disabled = true;
        if (count <= 6) nextBut.disabled = true;
        buttonBlock.append(prevBut, nextBut);
        prodList.append(buttonBlock);
        const quantity = document.querySelector('.quantity') as HTMLSpanElement;
        quantity.textContent = `${count}`;
    })();
}
