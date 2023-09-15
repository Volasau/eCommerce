import { divHTML } from '../../catalog/classes/elementBuilder';

export function createTotalSumRow(sum: number): HTMLDivElement {
    const wrapper = divHTML.getElement('TOTAL SUM:', 'cart-total-sum', 'row-wrapper') as HTMLDivElement;
    const sumBlock = divHTML.getElement(String(sum), 'cart-sum', 'cart-sum') as HTMLDivElement;
    const emptyBlock = divHTML.getElement('', 'empty', 'cart-delete') as HTMLDivElement;
    wrapper.append(sumBlock, emptyBlock);

    return wrapper;
}
