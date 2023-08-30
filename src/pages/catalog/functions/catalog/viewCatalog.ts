import { categoryResponse } from '../../../../data/categoryResponse';
import { Category } from '../../classes/categoryClass';
import { divHTML } from '../../classes/elementBuilder';
import { ICategory } from '../../interfaces/categoryInterface';
import { buildCategoryName } from './buildCategoryName';
import { buildDiscountBlock } from './buildDiscountBlock';
import { buildHashChain } from './buildHashChain';
import { buildProductViewer } from './buildProductViewer';

export function viewCatalog() {
    const cat = categoryResponse.map((cat): ICategory => {
        return new Category(cat);
    });

    const wrapper = divHTML.getElement('', 'view-catalog', 'full-catalog');
    const hashChain = buildHashChain();
    const discount = buildDiscountBlock();
    const categoryName = buildCategoryName();
    const catalogViewer = buildProductViewer(cat);
    wrapper.append(hashChain, discount, categoryName, catalogViewer);

    return wrapper;
}
