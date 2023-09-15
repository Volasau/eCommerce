import { buttonHTML, divHTML } from '../../catalog/classes/elementBuilder';
import { LineItem } from '../interfaces/lineItemInterface';

export function createProductRow(prod: LineItem): HTMLDivElement {
    const name = prod.name.en;
    const quantity = String(prod.quantity);
    const price = String(prod.price.value.centAmount);
    const sum = String(+quantity * +price);
    const wrapper = divHTML.getElement('', `${prod.id}-cart-row-wrap`, 'row-wrapper cart-prod-wrap') as HTMLDivElement;
    const prodImage = divHTML.getElement('', 'cart-prod-image-block', 'cart-row cart-image') as HTMLDivElement;
    const prodName = divHTML.getElement(name, 'cart-prod-name', 'cart-row cart-name') as HTMLDivElement;
    const prodQuantity = divHTML.getElement('', 'cart-prod-quant', 'cart-row cart-quantity') as HTMLDivElement;
    const prodPrice = divHTML.getElement(price, 'cart-prod-price', 'cart-row cart-price') as HTMLDivElement;
    const prodSum = divHTML.getElement(sum, 'cart-prod-sum', 'cart-row cart-sum') as HTMLDivElement;
    const deleteBlock = divHTML.getElement('', 'cart-prod-delete', 'cart-row cart-delete') as HTMLDivElement;

    const img = new Image();
    img.src = prod.variant.images[0].url;
    img.id = 'cart-prod-imag';
    img.width = 100;
    prodImage.append(img);

    const count = divHTML.getElement(quantity, 'count', 'count') as HTMLDivElement;
    const plusBut = buttonHTML.getElement('+', 'cart-prod-plus', 'cart-plus-button') as HTMLButtonElement;
    const minusBut = buttonHTML.getElement('-', 'cart-prod-minus', 'cart-minus-button') as HTMLButtonElement;
    prodQuantity.append(minusBut, count, plusBut);

    const deleteBut = buttonHTML.getElement('DELETE', 'delete-cart-prod', 'delete-cart-prod') as HTMLButtonElement;
    deleteBlock.append(deleteBut);

    wrapper.append(prodImage, prodName, prodQuantity, prodPrice, prodSum, deleteBlock);

    return wrapper;
}
