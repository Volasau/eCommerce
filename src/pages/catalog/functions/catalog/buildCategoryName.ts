import { buttonHTML, divHTML } from '../../classes/elementBuilder';

export function buildCategoryName(): HTMLDivElement {
    const wrapper = divHTML.getElement('CATALOG', 'category-name', 'catalog') as HTMLDivElement;
    const filterBut = buttonHTML.getElement('FILTER', 'filter-but', 'filt') as HTMLButtonElement;
    wrapper.append(filterBut);
    return wrapper;
}
