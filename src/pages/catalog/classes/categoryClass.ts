import { getAttributeFromResponse } from '../functions/filter/getAttributeFromResponse';
import { IAttr } from '../interfaces/attr.interfaces';
import { ICategory } from '../interfaces/category.interfaces';
import { ICategoryResp } from '../interfaces/categoryResponse/categoryResponse.interfaces';

export class Category implements ICategory {
    catId: string;

    imageURL: string;

    catName: string;

    attributes: IAttr[];

    constructor(categoryResponse: ICategoryResp) {
        this.catId = categoryResponse.id;
        this.imageURL = categoryResponse.subcategories[0].products[0].allVariants[0].images[0].url;
        this.catName = categoryResponse.name.en;
        this.attributes = getAttributeFromResponse(categoryResponse);
    }
}
