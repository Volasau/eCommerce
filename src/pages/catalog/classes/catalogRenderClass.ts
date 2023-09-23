import { constants } from '../../../data/constants';
import { IProduct } from '../../../server/products/queryProductProjections';
import { buildCategoryName } from '../functions/catalog/buildCategoryName';
import { buildDiscountBlock } from '../functions/catalog/buildDiscountBlock';
import { buildHashChain } from '../functions/catalog/buildHashChain';
import { buildProductViewer } from '../functions/catalog/buildProductViewer';
import { createSearchingWindow } from '../functions/filter/createSearchingWindow';
import { buildProductPage } from '../functions/product/buildProductPage';
import { ICatalog } from '../interfaces/catalog.interfaces';
import { ICategory } from '../interfaces/category.interfaces';
import { ICategoryResp } from '../interfaces/categoryResponse/categoryResponse.interfaces';
import { Category } from './categoryClass';
import { divHTML } from './elementBuilder';

export class CatalogRender implements ICatalog {
    private curCatalog: Element | null;

    private title: HTMLElement;

    private wrapper: HTMLDivElement;

    private hashChain: HTMLDivElement;

    private search: HTMLDivElement;

    private discount: HTMLDivElement;

    private cartStatus: string;

    private categoryName: HTMLDivElement;

    private catalogViewer: HTMLDivElement;

    private categories: ICategory[];

    private product: IProduct;

    constructor(categoryResponse: ICategoryResp[] | ICategory[] | IProduct, title: HTMLElement, cartStatus: string) {
        this.categories = [];
        this.product = constants.productList[0];
        if (Array.isArray(categoryResponse)) {
            if (Object.keys(categoryResponse[0]).length === 4) {
                const catResp = categoryResponse as ICategory[];
                this.categories = catResp;
            } else {
                const catResp = categoryResponse as ICategoryResp[];
                this.categories = catResp.map((cat): ICategory => {
                    return new Category(cat);
                });
            }
        } else if (categoryResponse) {
            this.product = categoryResponse;
        }
        this.curCatalog = title.nextElementSibling ? title.nextElementSibling : null;
        this.title = title;
        this.wrapper = divHTML.getElement('', 'view-catalog', 'full-catalog') as HTMLDivElement;
        this.hashChain = buildHashChain();
        this.search = createSearchingWindow();
        this.discount = buildDiscountBlock();
        this.cartStatus = cartStatus;
        this.categoryName = buildCategoryName();
        this.catalogViewer = buildProductViewer(this.categories);
    }

    renderCatalog(): void {
        this.wrapper.append(this.hashChain, this.search, this.discount, this.categoryName, this.catalogViewer);
        this.title.after(this.wrapper);
        constants.page = 0;
    }

    renderCategory(): void {
        if (this.curCatalog !== null) this.curCatalog.remove();
        this.renderCatalog();
    }

    renderSubCategory(): void {
        this.renderCategory();
        const categoryBlock = document.getElementById('category-view') as HTMLDivElement;
        categoryBlock.remove();
    }

    renderProduct(): void {
        if (this.curCatalog !== null) this.curCatalog.remove();
        this.wrapper.append(this.hashChain, this.search, buildProductPage(this.product, this.cartStatus));
        this.title.after(this.wrapper);
    }
}
