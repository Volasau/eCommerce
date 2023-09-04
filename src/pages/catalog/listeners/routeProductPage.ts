import { categoryResponse } from '../../../server/function/structureCategories';
import { openProductPage } from '../functions/product/openProductPage';
import { openSubcategoryPage } from '../functions/catalog/openSubcategoryPage';
import { openCategoryPage } from '../functions/catalog/openCategoryPage';

export function routeProductPage(locHash: string) {
    const localHash = locHash.replace(/_/g, ' ');

    categoryResponse.forEach((cat) => {
        cat.subcategories.forEach((sub) => {
            sub.products.forEach((prod) => {
                switch (localHash) {
                    case `#/Catalog/${cat.name.en}/${sub.name.en}/${prod.name}`:
                        openProductPage(prod);
                        break;
                    case `#/Catalog/${cat.name.en}/${sub.name.en}`:
                        openSubcategoryPage(sub);
                        break;
                    case `#/Catalog/${cat.name.en}`:
                        openCategoryPage(cat);
                        break;
                }
            });
        });
    });
}
