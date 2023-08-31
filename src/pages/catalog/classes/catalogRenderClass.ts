import { constants } from '../../../data/constants';
import { buildCategoryName } from '../functions/catalog/buildCategoryName';
import { buildDiscountBlock } from '../functions/catalog/buildDiscountBlock';
import { buildHashChain } from '../functions/catalog/buildHashChain';
import { buildProductViewer } from '../functions/catalog/buildProductViewer';
import { buildProductPage } from '../functions/product/buildProductPage';
import { ICatalog } from '../interfaces/catalogInterface';
import { ICategory } from '../interfaces/categoryInterface';
import { ICategoryResp } from '../interfaces/categoryResponse/categoryResponseInterface';
import { IProduct } from '../interfaces/productInterface';
import { Category } from './categoryClass';
import { divHTML } from './elementBuilder';

export class CatalogRender implements ICatalog {
    title: HTMLElement;
    wrapper: HTMLDivElement;
    hashChain: HTMLDivElement;
    discount: HTMLDivElement;
    categoryName: HTMLDivElement;
    catalogViewer: HTMLDivElement;
    categories: ICategory[];
    product: IProduct;
    constructor(categoryResponse: ICategoryResp[] | ICategory[] | IProduct, title: HTMLElement) {
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
        this.title = title;
        this.wrapper = divHTML.getElement('', 'view-catalog', 'full-catalog') as HTMLDivElement;
        this.hashChain = buildHashChain();
        this.discount = buildDiscountBlock();
        this.categoryName = buildCategoryName();
        this.catalogViewer = buildProductViewer(this.categories);
    }

    renderCatalog() {
        this.wrapper.append(this.hashChain, this.discount, this.categoryName, this.catalogViewer);
        this.title.after(this.wrapper);
    }

    renderProduct() {
        this.wrapper.append(this.hashChain, buildProductPage(this.product));
        this.title.after(this.wrapper);
    }
}
