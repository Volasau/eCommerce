import { IProduct } from '../../../server/products/queryProductProjections';
import { ICategory } from './categoryInterface';

export interface ICatalog {
    curCatalog: Element | null;
    title: HTMLElement;
    wrapper: HTMLDivElement;
    hashChain: HTMLDivElement;
    search: HTMLDivElement;
    discount: HTMLDivElement;
    cartStatus: string;
    categoryName: HTMLDivElement;
    catalogViewer: HTMLDivElement;
    categories: ICategory[];
    product: IProduct;

    renderCatalog(): void;
    renderProduct(): void;
}
