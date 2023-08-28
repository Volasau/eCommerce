import { IProduct } from './productInterface';

export interface IProductPage {
    productHTML: HTMLDivElement;
    product: IProduct;
    render(): void;
}
