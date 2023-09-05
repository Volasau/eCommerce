import { categoryResponse } from '../../../server/function/structureCategories';
import { ICategoryResp } from '../interfaces/categoryResponse/categoryResponseInterface';

export function addCategoryLink() {
    document.addEventListener('click', (event) => {
        const target = event.target as HTMLElement;
        if (target.classList.contains('cat-card-dark')) {
            const categoryId = target.id.split('-').slice(0, -1).join('-');
            categoryResponse.forEach((cat: ICategoryResp) => {
                if (cat.id === categoryId) {
                    document.location = `#/catalog/${cat.name.en.toLocaleLowerCase()}`.replace(/ /g, '_');
                }
            });
        }
    });
}
