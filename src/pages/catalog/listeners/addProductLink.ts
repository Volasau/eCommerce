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
