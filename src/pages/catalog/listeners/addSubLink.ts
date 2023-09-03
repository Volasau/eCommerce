import { categoryResponse } from '../../../server/function/structureCategories';
import { ICategoryResp } from '../interfaces/categoryResponse/categoryResponseInterface';

export function addSubLink() {
    document.addEventListener('click', (event) => {
        const target = event.target as HTMLElement;
        if (target.classList.contains('sub-card-dark')) {
            const subCategoryID = target.id.split('-').slice(0, -1).join('-');
            categoryResponse.forEach((cat: ICategoryResp) => {
                cat.subcategories.forEach((sub) => {
                    if (sub.id === subCategoryID) {
                        document.location = `#/Catalog/${cat.name.en}/${sub.name.en}`.replace(/ /g, '-');
                    }
                });
            });
        }
    });
}
