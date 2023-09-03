import { constants } from '../../../../data/constants';
import { buttonHTML, divHTML } from '../../classes/elementBuilder';
import { ICategory } from '../../interfaces/categoryInterface';
import { createFilterBlock } from '../filter/createFilterBlock';
import { buildProductList } from '../product/buildProductList';
import buildCategoryItem from './buildCategoryItem';

export function buildProductViewer(categories: ICategory[]) {
    const wrapper = divHTML.getElement('', 'viewer-wrap', 'catalog') as HTMLDivElement;
    const filter = createFilterBlock(categories);
    const productWrapper = divHTML.getElement('', 'pr-wrap', 'viewer') as HTMLDivElement;
    const categoriesBlock = divHTML.getElement('', 'category-view', 'viewer-inner') as HTMLDivElement;
    const displaySequence = divHTML.getElement('', 'sequence-view', 'viewer-inner') as HTMLDivElement;
    const productList = buildProductList();
    const cheap = buttonHTML.getElement('CHEAP', 'cheap-view', 'sequence-inner') as HTMLButtonElement;
    const alphabet = buttonHTML.getElement('ALPHABETTICALLY', 'alpha-view', 'sequence-inner') as HTMLButtonElement;
    const quantity = divHTML.getElement('', 'quantity-view', 'sequence-inner') as HTMLDivElement;

    categories.forEach((category) => {
        categoriesBlock.append(buildCategoryItem(category));
    });
    quantity.innerHTML = `Quantity: <span class="quantity">${constants.productList.length}</span> products`;
    displaySequence.append(cheap, alphabet, quantity);
    productWrapper.append(categoriesBlock, displaySequence, productList);
    wrapper.append(filter, productWrapper);
    return wrapper;
}
