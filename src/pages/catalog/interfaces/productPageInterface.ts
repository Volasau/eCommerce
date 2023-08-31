import { IProductResp } from './categoryResponse/categoryResponseInterface';

export interface IProductPage {
    productHTML: HTMLDivElement;
    product: IProductResp;
    render(): void;
}
