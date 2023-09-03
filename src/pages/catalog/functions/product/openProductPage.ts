import { constants } from '../../../../data/constants';
import { CatalogRender } from '../../classes/catalogRenderClass';
import { IProductResp } from '../../interfaces/categoryResponse/categoryResponseInterface';
import { getImagesFromProduct } from './getImagesFromProduct';

export function openProductPage(prod: IProductResp) {
    const prodList = document.querySelector('.full-catalog') as HTMLDivElement;
    prodList.remove();

    const title = document.querySelector('h1') as HTMLElement;
    const productPage = new CatalogRender(prod, title);
    productPage.renderProduct();

    const minusBut = document.querySelector('.minus-button') as HTMLButtonElement;
    minusBut.disabled = true;

    constants.modalImages = getImagesFromProduct(prod);
}
