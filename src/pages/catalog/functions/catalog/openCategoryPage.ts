import { categoryResponse } from '../../../../server/function/structureCategories';
import urlImg from '../../../../assets/icons/arrow.svg';
import { CatalogRender } from '../../classes/catalogRenderClass';
import { buttonHTML, spanHTML } from '../../classes/elementBuilder';
import { ICategoryResp } from '../../interfaces/categoryResponse/categoryResponseInterface';
import { getSubCategoriesFrom } from './getSubCategoriesFrom';
import { buildProductItem } from '../product/buildProductItem';
import { changeQuantity } from './changeQuantity';

export function openCategoryPage(cat: ICategoryResp) {
    const title = document.querySelector('h1') as HTMLElement;
    const categoryResp = categoryResponse.filter((catResp) => catResp.id === cat.id);
    const subCategory = getSubCategoriesFrom(categoryResp[0]);

    const category = new CatalogRender(subCategory, title);
    category.renderCategory();

    const hash = document.getElementById('row-chain') as HTMLSpanElement;
    const categName = spanHTML.getElement(
        `${categoryResp[0].name.en}`,
        `${categoryResp[0].id}-cat-chain`,
        'chain'
    ) as HTMLSpanElement;
    const arrow1 = new Image(30, 10);
    arrow1.src = urlImg;
    hash.append(categName, arrow1);

    const catItem = document.getElementById('category-view') as Node;
    const items = catItem.childNodes as NodeList;
    items.forEach((item) => {
        const cat = item.firstChild as HTMLDivElement;
        cat.className = 'sub-card-dark';
    });

    const categoryNameHTML = document.getElementById('category-name') as HTMLDivElement;
    const filterBut = buttonHTML.getElement('FILTER', 'filter-but', 'filt') as HTMLButtonElement;
    categoryNameHTML.textContent = `${cat.name.en}`;
    categoryNameHTML.append(filterBut);

    const prodList = document.getElementById('product-view') as HTMLDivElement;
    prodList.innerHTML = '';
    cat.subcategories.forEach((sub) => {
        sub.products.forEach((prod) => {
            prodList.append(buildProductItem(prod));
        });
    });

    changeQuantity();
}
