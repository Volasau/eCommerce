import { buttonHTML, divHTML } from '../../catalog/classes/elementBuilder';

export function createTotalSumRow(sum: number): HTMLDivElement {
    const wrapper = divHTML.getElement('TOTAL SUM:', 'cart-total-sum', 'row-wrapper') as HTMLDivElement;
    const sumBlock = divHTML.getElement(String(sum), 'cart-sum', 'cart-sum') as HTMLDivElement;
    const clearBlock = divHTML.getElement('', 'empty', 'cart-delete') as HTMLDivElement;
    const clearBut = buttonHTML.getElement('CLEAR THE CART', 'cart-cleaner', 'cart-cleaner') as HTMLButtonElement;
    clearBlock.append(clearBut);
    wrapper.append(sumBlock, clearBlock);

    return wrapper;
}
