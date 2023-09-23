import { categoryResponse } from '../../../server/function/structureCategories';
import { ICategoryResp } from '../interfaces/categoryResponse/categoryResponse.interfaces';

export function addCategoryLink(target: HTMLElement): void {
    const id = target.id;
    const categoryId = id.slice(0, id.lastIndexOf('-'));
    categoryResponse.forEach((cat: ICategoryResp) => {
        if (cat.id === categoryId) {
            document.location = `#/catalog/${cat.name.en.toLocaleLowerCase()}`.replace(/ /g, '_');
        }
    });
}
