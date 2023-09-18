import { constants } from '../../../../data/constants';
import { getCartManager } from '../../../../server/cart/getCartById';
import { createCartLogic } from '../../../../server/function/addCartLogic';
import { Cart } from '../../../basket/interfaces/cartInterface';
import { buttonHTML, divHTML } from '../../classes/elementBuilder';
import { buildProductItem } from './buildProductItem';

export function buildProductList(): HTMLDivElement {
    const productList = divHTML.getElement('', 'product-view-list', 'viewer-inner') as HTMLDivElement;
    const products = divHTML.getElement('', 'product-view', 'viewer-prod') as HTMLDivElement;
    (async () => {
        await createCartLogic();
        const cart = (await getCartManager.getCartById(sessionStorage.newCartId)) as Cart;

        for (let i = 0; i < 6; i += 1) {
            if (constants.productList[i]) {
                const product = buildProductItem(constants.productList[i], cart);
                products.append(product);
            }
        }
        productList.append(products);
        const button = buttonHTML.getElement('>>>NEXT', 'next-prod', 'next-prod') as HTMLButtonElement;
        productList.append(button);
    })();

    return productList;
}
