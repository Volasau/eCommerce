import { divHTML } from '../../catalog/classes/elementBuilder';

export function createCartHeader(): HTMLDivElement {
    const wrapper = divHTML.getElement('', 'cart-header', 'row-wrapper') as HTMLDivElement;
    const imageHead = divHTML.getElement('IMAGE', 'image-head', 'head cart-image') as HTMLDivElement;
    const nameHead = divHTML.getElement('NAME', 'name-head', 'head cart-name') as HTMLDivElement;
    const quantityHead = divHTML.getElement('QUANTITY', 'quantity-head', 'head cart-quantity') as HTMLDivElement;
    const priceHead = divHTML.getElement('PRICE', 'price-head', 'head cart-price') as HTMLDivElement;
    const sumHead = divHTML.getElement('SUM', 'sum-head', 'head cart-sum') as HTMLDivElement;
    const deleteHead = divHTML.getElement('', 'delete-head', 'head cart-delete') as HTMLDivElement;

    wrapper.append(imageHead, nameHead, quantityHead, priceHead, sumHead, deleteHead);

    return wrapper;
}
