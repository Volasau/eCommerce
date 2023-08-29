import { divHTML } from '../../classes/elementBuilder';

export function buildCategoryName() {
    const wrapper = divHTML.getElement('CATALOG', 'category-name', 'catalog') as HTMLDivElement;
    return wrapper;
}
