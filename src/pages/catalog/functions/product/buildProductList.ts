import { constants } from '../../../../data/constants';
import { getCartManager } from '../../../../server/cart/getCartById';
import { createCartLogic } from '../../../../server/function/addCartLogic';
import { Cart } from '../../../basket/interfaces/cartInterface';
import { divHTML } from '../../classes/elementBuilder';
import { buildProductItem } from './buildProductItem';

export function buildProductList(): HTMLDivElement {
    const productList = divHTML.getElement('', 'product-view', 'viewer-inner') as HTMLDivElement;
    (async () => {
        await createCartLogic();
        const cart = (await getCartManager.getCartById(sessionStorage.newCartId)) as Cart;

        constants.productList.forEach((prod) => {
            const product = buildProductItem(prod, cart);
            productList.append(product);
        });
    })();

    return productList;
}
