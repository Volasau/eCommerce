import { constants } from '../../../data/constants';
import { CatalogRender } from '../classes/catalogRenderClass';
import { getImagesFromProduct } from '../functions/product/getImagesFromProduct';
// import { buildProductPage } from '../functions/product/buildProductPage';

export function openProductPage() {
    document.addEventListener('click', (event) => {
        const target = event.target as HTMLElement;
        if (target.classList.contains('min')) {
            constants.productList.forEach((product) => {
                if (product.id === target.id.split('-').slice(0, -1).join('-')) {
                    const prodList = document.querySelector('.full-catalog') as HTMLDivElement;
                    prodList.remove();

                    const title = document.querySelector('h1') as HTMLElement;
                    const productPage = new CatalogRender(product, title);
                    productPage.renderProduct();

                    const minusBut = document.querySelector('.minus-button') as HTMLButtonElement;
                    minusBut.disabled = true;

                    constants.modalImages = getImagesFromProduct(product);
                }
            });
        }
    });
}
