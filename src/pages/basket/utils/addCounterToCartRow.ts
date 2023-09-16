import { buttonHTML, divHTML } from '../../catalog/classes/elementBuilder';

export function addCounterToCartRow(prodQuantity: HTMLDivElement, quantity: string, id: string): void {
    const count = divHTML.getElement(quantity, `${id}-count`, 'count') as HTMLDivElement;
    const plusBut = buttonHTML.getElement('+', `${id}-cart-prod-plus`, 'plus-button') as HTMLButtonElement;
    const minusBut = buttonHTML.getElement('-', `${id}-cart-prod-minus`, 'minus-button') as HTMLButtonElement;
    prodQuantity.append(minusBut, count, plusBut);
}
