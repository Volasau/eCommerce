import { ICartViewer } from '../interfaces/cartViewerInterface';
import { divHTML } from '../../catalog/classes/elementBuilder';
import { LineItem } from '../interfaces/lineItemInterface';
import { Cart } from '../interfaces/cartInterface';
import { createProductRow } from '../utils/createProductRow.utils';
import { createTotalSumRow } from '../utils/createTotalSumRow.utils';
import { createCartHeader } from '../utils/createCartHeader.utils';
import { addEmptyInfo } from '../utils/addEmptyInfo.utils';
import { addPromoButBigSum } from '../functions/addPromoButBigSum';

export class CartViewer implements ICartViewer {
    container: HTMLDivElement;

    cartProducts: LineItem[];

    totalSum: number;

    constructor(cart: Cart) {
        this.container = divHTML.getElement('', 'cart-list', 'cart-list') as HTMLDivElement;
        this.cartProducts = cart.lineItems;
        this.totalSum = cart.totalPrice.centAmount / 100;
    }

    view(): HTMLDivElement {
        const cartHeader = createCartHeader();
        this.container.append(cartHeader);
        if (this.cartProducts.length === 0) {
            this.container.append(addEmptyInfo());
        }
        this.cartProducts.forEach((prod) => {
            const productRow = createProductRow(prod);
            this.container.append(productRow);
        });

        const totalSumRow = createTotalSumRow(this.totalSum);
        if (this.totalSum > 200) addPromoButBigSum(totalSumRow);
        this.container.append(totalSumRow);
        const clearBut = this.container.querySelector('#cart-cleaner') as HTMLButtonElement;
        if (this.cartProducts.length === 0) clearBut.disabled = true;
        return this.container;
    }
}
