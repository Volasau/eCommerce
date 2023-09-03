import urlImg from '../../../assets/icons/arrow.svg';
import { categoryResponse } from '../../../server/function/structureCategories';
import { CatalogRender } from '../classes/catalogRenderClass';
import { spanHTML } from '../classes/elementBuilder';
import { getSubCategoriesFrom } from '../functions/catalog/getSubCategoriesFrom';

export function openCategory() {
    document.addEventListener('click', (event) => {
        const target = event.target as HTMLDivElement;
        if (target.classList.contains('cat-card-dark')) {
            const title = document.querySelector('h1') as HTMLElement;
            const categoryId = target.id.split('-').slice(0, -1).join('-');
            const categoryResp = categoryResponse.filter((catResp) => catResp.id === categoryId);
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
        }
    });
}
