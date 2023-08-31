import { ICategory } from '../../interfaces/categoryInterface';
import { ISubCategoryResp } from '../../interfaces/categoryResponse/categoryResponseInterface';
import { getAllAttrFromProducts } from './getAllAttrFromProducts';

export function getSubCategoryWithAllAttr(subCategoryResp: ISubCategoryResp) {
    const subCategory: ICategory[] = [
        {
            catId: subCategoryResp.id,
            imageURL: subCategoryResp.products[0].allVariants[0].images[0].url,
            catName: subCategoryResp.name.en,
            attributes: getAllAttrFromProducts(subCategoryResp),
        },
    ];

    return subCategory;
}
