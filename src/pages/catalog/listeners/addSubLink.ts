import { categoryResponse } from '../../../server/function/structureCategories';
import { ICategoryResp } from '../interfaces/categoryResponse/categoryResponse.interfaces';

export function addSubLink(target: HTMLElement): void {
    const id = target.id;
    const subCategoryID = id.slice(0, id.lastIndexOf('-'));
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
