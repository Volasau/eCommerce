import { IProduct } from '../../../server/products/queryProductProjections';

export interface IProductPage {
    productHTML: HTMLDivElement;
    product: IProduct;
    render(): void;
}
