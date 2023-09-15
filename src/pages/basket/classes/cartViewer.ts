import { ICartViewer } from '../interfaces/cartViewerInterface';
import { divHTML } from '../../catalog/classes/elementBuilder';
import { LineItem } from '../interfaces/lineItemInterface';
import { Cart } from '../interfaces/cartInterface';
import { createProductRow } from '../utils/createProductRow';

export class CartViewer implements ICartViewer {
    container: HTMLDivElement;

    cartProducts: LineItem[];

    totalSum: number;

    constructor(cart: Cart) {
        this.container = divHTML.getElement('', 'cart-list', 'cart-list') as HTMLDivElement;
        this.cartProducts = cart.lineItems;
        this.totalSum = 0;
    }

    view(): void {
        // const totalSumRow = createTotalSumRow(this.totalSum);
        this.cartProducts.forEach((prod) => {
            const productRow = createProductRow(prod);
            this.container.append(productRow);
        });
        // this.container.append(totalSumRow);
    }
}
