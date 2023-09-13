import { categoryResponse } from '../../../server/function/structureCategories';
import { openProductPage } from '../functions/product/openProductPage';
import { openSubcategoryPage } from '../functions/catalog/openSubcategoryPage';
import { openCategoryPage } from '../functions/catalog/openCategoryPage';

export function routeProductPage(locHash: string): void {
    const localHash = locHash.replace(/_/g, ' ');

    categoryResponse.forEach((cat) => {
        cat.subcategories.forEach((sub) => {
            sub.products.forEach((prod) => {
                const catName = cat.name.en.toLocaleLowerCase();
                const subName = sub.name.en.toLocaleLowerCase();
                const prodName = prod.name.toLocaleLowerCase();
                switch (localHash) {
                    case `#/catalog/${catName}/${subName}/${prodName}`:
                        openProductPage(prod);
                        break;
                    case `#/catalog/${catName}/${subName}`:
                        openSubcategoryPage(sub);
                        break;
                    case `#/catalog/${catName}`:
                        openCategoryPage(cat);
                        break;
                }
            });
        });
    });
}
