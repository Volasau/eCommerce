import { ICategory } from '../../interfaces/categoryInterface';
import { ICategoryResp } from '../../interfaces/categoryResponse/categoryResponseInterface';
import { getAttributesFromSubCategory } from '../filter/getAttributesFromSubCategory';

export function getSubCategoriesFrom(categoryResponse: ICategoryResp) {
    const subCategories: ICategory[] = [];

    categoryResponse.subcategories.forEach((sub) => {
        if (sub.products[0]) {
            subCategories.push({
                catId: sub.id,
                imageURL: sub.products[0].allVariants[0].images[0].url,
                catName: sub.name.en,
                attributes: [],
            });
        }
    });

    subCategories.forEach((sub) => {
        categoryResponse.subcategories.forEach((subResp) => {
            if (sub.catName === subResp.name.en) {
                sub.attributes = getAttributesFromSubCategory(subResp);
            }
        });
    });

    return subCategories;
}
