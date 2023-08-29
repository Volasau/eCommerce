import { constants } from '../../../../data/constants';
import { divHTML } from '../../classes/elementBuilder';
import { buildProductItem } from './buildProductItem';

export function buildProductList() {
    const productList = divHTML.getElement('', 'product-view', 'viewer-inner');
    constants.productList.forEach((prod) => {
        const product = buildProductItem(prod);
        productList.append(product);
    });

    return productList;
}
