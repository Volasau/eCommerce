import { constants } from '../../../../data/constants';
import { categoryResponse } from '../../../../server/function/structureCategories';
import { IProduct } from '../../../../server/products/queryProductProjections';
import { CatalogRender } from '../../classes/catalogRenderClass';
import { buildHashChainForProdPage } from './buildHashChainForProdPage';
import { getImagesFromProduct } from './getImagesFromProduct';

export function openProductPage(prod: IProduct): void {
    const prodCartBut = document.getElementById(`${prod.id}-cart`) as HTMLButtonElement;
    const cartStatus = prodCartBut.textContent?.split(' ').at(-1) as string;

    const prodList = document.querySelector('.full-catalog') as HTMLDivElement;
    prodList.remove();

    const title = document.querySelector('.header__page') as HTMLElement;
    const productPage = new CatalogRender(prod, title, cartStatus);
    productPage.renderProduct();

    constants.modalImages = getImagesFromProduct(prod);

    categoryResponse.forEach((cat) => {
        cat.subcategories.forEach((sub) => {
            sub.products.forEach((product) => {
                if (prod.id === product.id) {
                    buildHashChainForProdPage(cat, sub, prod);
                }
            });
        });
    });
}
