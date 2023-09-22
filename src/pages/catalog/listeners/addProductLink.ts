import { categoryResponse } from '../../../server/function/structureCategories';
import { ICategoryResp } from '../interfaces/categoryResponse/categoryResponse.interfaces';

export function addProductLink(): void {
    document.addEventListener('click', (event) => {
        const target = event.target as HTMLElement;
        if (target.classList.contains('min')) {
            const id = target.id;
            const prodID = id.slice(0, id.lastIndexOf('-'));
            categoryResponse.forEach((cat: ICategoryResp) => {
                cat.subcategories.forEach((sub) => {
                    sub.products.forEach((prod) => {
                        if (prod.id === prodID) {
                            const catName = cat.name.en.toLocaleLowerCase();
                            const subName = sub.name.en.toLocaleLowerCase();
                            const prodName = prod.name.toLocaleLowerCase();
                            document.location = `#/catalog/${catName}/${subName}/${prodName}`.replace(/ /g, '_');
                        }
                    });
                });
            });
        }
    });
}
