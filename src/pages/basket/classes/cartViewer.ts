import { ICartViewer } from '../interfaces/cartViewerInterface';
import { divHTML } from '../../catalog/classes/elementBuilder';
import { LineItem } from '../interfaces/lineItemInterface';
import { Cart } from '../interfaces/cartInterface';
import { createProductRow } from '../utils/createProductRow.utils';
import { createTotalSumRow } from '../utils/createTotalSumRow';
import { createCartHeader } from '../utils/createCartHeader';

export class CartViewer implements ICartViewer {
    container: HTMLDivElement;

    cartProducts: LineItem[];

    totalSum: number;

    constructor(cart: Cart) {
        this.container = divHTML.getElement('', 'cart-list', 'cart-list') as HTMLDivElement;
        this.cartProducts = cart.lineItems;
        this.totalSum = 0;
    }

    view(): HTMLDivElement {
        const cartHeader = createCartHeader();
        this.container.append(cartHeader);
        const totalSumRow = createTotalSumRow(this.totalSum);
        console.log(this.cartProducts);
        this.cartProducts.forEach((prod) => {
            const productRow = createProductRow(prod);
            this.container.append(productRow);
        });
        this.container.append(totalSumRow);
        return this.container;
    }
}
