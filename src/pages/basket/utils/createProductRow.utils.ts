import { buttonHTML, divHTML } from '../../catalog/classes/elementBuilder';
import { LineItem } from '../interfaces/lineItemInterface';
import { addCounterToCartRow } from './addCounterToCartRow';
import { addProdImageToCartRow } from './addProdImageToCartRow';

export function createProductRow(prod: LineItem): HTMLDivElement {
    const id = prod.id;
    const name = prod.name.en;
    const quantity = String(prod.quantity);
    const price = String(prod.price.value.centAmount);
    const sum = String(+quantity * +price);
    const wrapper = divHTML.getElement('', `${id}-cart-row-wrap`, 'row-wrapper cart-prod-wrap') as HTMLDivElement;
    const prodImage = divHTML.getElement('', `${id}-cart-prod-image-block`, 'cart-row cart-image') as HTMLDivElement;
    const prodName = divHTML.getElement(name, `${id}-cart-prod-name`, 'cart-row cart-name') as HTMLDivElement;
    const prodQuantity = divHTML.getElement('', `${id}-cart-prod-quant`, 'cart-row cart-quantity') as HTMLDivElement;
    const prodPrice = divHTML.getElement(price, `${id}-cart-prod-price`, 'cart-row cart-price') as HTMLDivElement;
    const prodSum = divHTML.getElement(sum, `${id}-cart-prod-sum`, 'cart-row cart-sum sum') as HTMLDivElement;
    const deleteBlock = divHTML.getElement('', `${id}-cart-prod-delete`, 'cart-row cart-delete') as HTMLDivElement;

    addProdImageToCartRow(prod, prodImage, id);
    addCounterToCartRow(prodQuantity, quantity, id);

    const deleteBut = buttonHTML.getElement('DELETE', `${id}-del-cart-prod`, 'delete-cart-prod') as HTMLButtonElement;
    deleteBlock.append(deleteBut);

    wrapper.append(prodImage, prodName, prodQuantity, prodPrice, prodSum, deleteBlock);

    return wrapper;
}
