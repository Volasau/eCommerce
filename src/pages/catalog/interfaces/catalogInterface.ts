import { ICategory } from './categoryInterface';
import { IProduct } from './productInterface';

export interface ICatalog {
    title: HTMLElement;
    wrapper: HTMLDivElement;
    hashChain: HTMLDivElement;
    discount: HTMLDivElement;
    categoryName: HTMLDivElement;
    catalogViewer: HTMLDivElement;
    categories: ICategory[];
    product: IProduct;

    renderCatalog(): void;
    renderProduct(): void;
}
