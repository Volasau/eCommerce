import { constants } from '../../../../data/constants';
import { divHTML } from '../../classes/elementBuilder';
import { buildProductItem } from './buildProductItem';

export function buildProductList(): HTMLDivElement {
    const productList = divHTML.getElement('', 'product-view', 'viewer-inner') as HTMLDivElement;
    constants.productList.forEach((prod) => {
        const product = buildProductItem(prod);
        productList.append(product);
    });

    return productList;
}
