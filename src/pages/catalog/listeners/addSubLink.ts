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
                        const catName = cat.name.en.toLocaleLowerCase();
                        const subName = sub.name.en.toLocaleLowerCase();
                        document.location = `#/catalog/${catName}/${subName}`.replace(/ /g, '_');
                    }
                });
            });
        }
    });
}
