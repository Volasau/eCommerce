import { ICategory } from '../../interfaces/category.interfaces';
import { ISubCategoryResp } from '../../interfaces/categoryResponse/categoryResponse.interfaces';
import { getAllAttrFromProducts } from './getAllAttrFromProducts';

export function getSubCategoryWithAllAttr(subCategoryResp: ISubCategoryResp): ICategory[] {
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
