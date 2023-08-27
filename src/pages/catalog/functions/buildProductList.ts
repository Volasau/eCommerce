import { constants } from '../../../data/constants';
import { divHTML } from '../classes/elementBuilder';
import { buildProductItem } from './buildProductItem';

export function buildProductList(container: HTMLElement) {
    const h1 = container.querySelector('h1') as HTMLElement;
    const productList = divHTML.getElement('', 'prod-list', 'prod-list');
    constants.productList.forEach((prod) => {
        const product = buildProductItem(prod);
        productList.append(product);
    });
    console.log(productList);
    h1.after(productList);
}
