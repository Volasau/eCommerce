import { ICategory } from './categoryInterface';
import { IProductResp } from './categoryResponse/categoryResponseInterface';

export interface ICatalog {
    curCatalog: Element | null;
    title: HTMLElement;
    wrapper: HTMLDivElement;
    hashChain: HTMLDivElement;
    search: HTMLDivElement;
    discount: HTMLDivElement;
    categoryName: HTMLDivElement;
    catalogViewer: HTMLDivElement;
    categories: ICategory[];
    product: IProductResp;

    renderCatalog(): void;
    renderCategory(): void;
    renderSubCategory(): void;
    renderProduct(): void;
}
