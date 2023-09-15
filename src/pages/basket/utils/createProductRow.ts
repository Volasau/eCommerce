import { divHTML } from '../../catalog/classes/elementBuilder';
import { LineItem } from '../interfaces/lineItemInterface';

export function createProductRow(prod: LineItem): HTMLDivElement {
    const wrapper = divHTML.getElement('', 'cart-row-wrap', 'row-wrapper') as HTMLDivElement;
    console.log(prod);
    return wrapper;
}
