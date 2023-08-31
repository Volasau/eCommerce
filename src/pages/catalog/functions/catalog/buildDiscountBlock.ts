import { divHTML } from '../../classes/elementBuilder';

export function buildDiscountBlock() {
    const wrapper = divHTML.getElement('% sales %', 'discount', 'catalog') as HTMLDivElement;
    return wrapper;
}
