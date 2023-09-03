import urlImg from '../../../assets/icons/arrow.svg';
import { categoryResponse } from '../../../server/function/structureCategories';
import { CatalogRender } from '../classes/catalogRenderClass';
import { spanHTML } from '../classes/elementBuilder';
import { getSubCategoryWithAllAttr } from '../functions/filter/getSubCategoryWithAllAttr';
import { ISubCategoryResp } from '../interfaces/categoryResponse/categoryResponseInterface';

export function openSubCategories() {
    document.addEventListener('click', (event) => {
        const target = event.target as HTMLDivElement;
        if (target.classList.contains('sub-card-dark')) {
            const title = document.querySelector('h1') as HTMLElement;
            let category = '';
            const subCategoryId = target.id.split('-').slice(0, -1).join('-');
            const subCategoryResp: ISubCategoryResp[] = [];
            console.log(subCategoryId, title);

            const subCategoriesRespList: string[] = [];
            categoryResponse.forEach((cat) => {
                cat.subcategories.forEach((sub) => {
                    subCategoriesRespList.push(sub.id);
                    if (subCategoryId === sub.id) {
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
        }
    });
}
