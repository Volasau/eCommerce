import { categoryResponse } from '../../../server/function/structureCategories';
import { ICategoryResp } from '../interfaces/categoryResponse/categoryResponseInterface';

export function addProductLink() {
    document.addEventListener('click', (event) => {
        const target = event.target as HTMLElement;
        if (target.classList.contains('min')) {
            const prodID = target.id.split('-').slice(0, -1).join('-');
            categoryResponse.forEach((cat: ICategoryResp) => {
                cat.subcategories.forEach((sub) => {
                    sub.products.forEach((prod) => {
                        if (prod.id === prodID) {
                            document.location = `#/Catalog/${cat.name.en}/${sub.name.en}/${prod.name}`.replace(
                                / /g,
                                '-'
                            );
                        }
                    });
                });
            });
        }
    });
}
