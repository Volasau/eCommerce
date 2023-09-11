import urlImg from '../../../../assets/icons/arrow.svg';
import { constants } from '../../../../data/constants';
import { categoryResponse } from '../../../../server/function/structureCategories';
import { IProduct } from '../../../../server/products/queryProductProjections';
import { CatalogRender } from '../../classes/catalogRenderClass';
import { spanHTML } from '../../classes/elementBuilder';
import { getImagesFromProduct } from './getImagesFromProduct';

export function openProductPage(prod: IProduct) {
    const prodList = document.querySelector('.full-catalog') as HTMLDivElement;
    prodList.remove();

    const title = document.querySelector('h1') as HTMLElement;
    const productPage = new CatalogRender(prod, title);
    productPage.renderProduct();

    const minusBut = document.querySelector('.minus-button') as HTMLButtonElement;
    minusBut.disabled = true;

    constants.modalImages = getImagesFromProduct(prod);

    categoryResponse.forEach((cat) => {
        cat.subcategories.forEach((sub) => {
            sub.products.forEach((product) => {
                if (prod.id === product.id) {
                    const hash = document.getElementById('row-chain') as HTMLSpanElement;
                    const subCategoryName = spanHTML.getElement(
                        sub.name.en,
                        `${sub.id}-sub-chain`,
                        'chain'
                    ) as HTMLSpanElement;
                    const arrow1 = new Image(30, 10);
                    arrow1.src = urlImg;

                    const categoryName = spanHTML.getElement(
                        cat.name.en,
                        `${cat.id}-cat-chain`,
                        'chain'
                    ) as HTMLSpanElement;
                    const arrow2 = new Image(30, 10);
                    arrow2.src = urlImg;

                    const productName = spanHTML.getElement(
                        prod.name,
                        `${prod.id}-prod-chain`,
                        'chain'
                    ) as HTMLSpanElement;

                    hash.append(categoryName, arrow2, subCategoryName, arrow1, productName);
                }
            });
        });
    });
}
