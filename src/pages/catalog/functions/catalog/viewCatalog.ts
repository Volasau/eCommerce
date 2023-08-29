import { categories } from '../../../../data/categoryObj';
import { divHTML } from '../../classes/elementBuilder';
import { buildCategoryName } from './buildCategoryName';
import { buildDiscountBlock } from './buildDiscountBlock';
import { buildHashChain } from './buildHashChain';
import { buildProductViewer } from './buildProductViewer';

export function viewCatalog() {
    const wrapper = divHTML.getElement('', 'view-catalog', 'full-catalog');
    const hashChain = buildHashChain();
    const discount = buildDiscountBlock();
    const categoryName = buildCategoryName();
    const catalogViewer = buildProductViewer(categories);
    wrapper.append(hashChain, discount, categoryName, catalogViewer);

    return wrapper;
}
