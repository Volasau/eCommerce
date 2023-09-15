import { LineItem } from './lineItemInterface';

export interface ICartViewer {
    container: HTMLDivElement;
    cartProducts: LineItem[];
    totalSum: number;
    view(): void;
}
