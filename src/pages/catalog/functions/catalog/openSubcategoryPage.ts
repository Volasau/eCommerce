import urlImg from '../../../../assets/icons/arrow.svg';
import { categoryResponse } from '../../../../server/function/structureCategories';
import { CatalogRender } from '../../classes/catalogRenderClass';
import { buttonHTML, spanHTML } from '../../classes/elementBuilder';
import { ISubCategoryResp } from '../../interfaces/categoryResponse/categoryResponseInterface';
import { getSubCategoryWithAllAttr } from '../filter/getSubCategoryWithAllAttr';
import { buildProductItem } from '../product/buildProductItem';
import { changeQuantity } from './changeQuantity';

export function openSubcategoryPage(subCateg: ISubCategoryResp) {
    const title = document.querySelector('h1') as HTMLElement;
    let category = '';
    const subCategoryResp: ISubCategoryResp[] = [];

    const subCategoriesRespList: string[] = [];
    categoryResponse.forEach((cat) => {
        cat.subcategories.forEach((sub) => {
            subCategoriesRespList.push(sub.id);
            if (subCateg.id === sub.id) {
                subCategoryResp.push(sub);
                category = cat.name.en;
            }
        });
    });

    const subCategory = getSubCategoryWithAllAttr(subCategoryResp[0]);
    const subCat = new CatalogRender(subCategory, title);
    subCat.renderSubCategory();

    const hash = document.getElementById('row-chain') as HTMLSpanElement;
    const subCategoryName = spanHTML.getElement(
        `${subCategoryResp[0].name.en}`,
        `${subCategoryResp[0].id}-sub-chain`,
        'chain'
    ) as HTMLSpanElement;
    const arrow1 = new Image(30, 10);
    arrow1.src = urlImg;

    const categoryName = spanHTML.getElement(category, `${category}-cat-chain`, 'chain') as HTMLSpanElement;
    const arrow2 = new Image(30, 10);
    arrow2.src = urlImg;

    hash.append(categoryName, arrow2, subCategoryName, arrow1);

    const subNameHTML = document.getElementById('category-name') as HTMLDivElement;
    const filterBut = buttonHTML.getElement('FILTER', 'filter-but', 'filt') as HTMLButtonElement;
    subNameHTML.textContent = `${subCateg.name.en}`;
    subNameHTML.append(filterBut);

    const prodList = document.getElementById('product-view') as HTMLDivElement;
    prodList.innerHTML = '';
    subCateg.products.forEach((prod) => {
        prodList.append(buildProductItem(prod));
    });

    changeQuantity();
}
