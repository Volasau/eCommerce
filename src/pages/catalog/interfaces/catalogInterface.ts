export interface ICatalog {
    hashChain: HTMLDivElement;
    discount: HTMLDivElement;
    categoryName: HTMLDivElement;
    productWrapper: HTMLDivElement;
    filter: HTMLDivElement;
    productList: HTMLDivElement;
    render(): void;
    switchPage(): void;
}
