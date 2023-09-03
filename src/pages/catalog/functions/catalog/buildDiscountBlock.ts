import { divHTML } from '../../classes/elementBuilder';

export function buildDiscountBlock() {
    const wrapper = divHTML.getElement('', 'discount-wrap', 'catalog') as HTMLDivElement;
    const discount = divHTML.getElement('% sales %', 'discount', 'discount-inner') as HTMLDivElement;
    wrapper.append(discount);
    return wrapper;
}
