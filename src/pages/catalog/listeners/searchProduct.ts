import { ProductSearchManager } from '../../../server/search/search';
import { productForm } from '../../../server/function/productForm';
import { IProduct, IProductsData } from '../../../server/products/queryProductProjections';
import { constants } from '../../../data/constants';
import { renderNewCatalog } from '../functions/catalog/renderNewCatalog';

export function searchByButton(): void {
    const searchInput = document.getElementById('search-input') as HTMLInputElement;
    const searchWord = searchInput.value;
    if (searchWord) {
        const productSearch = new ProductSearchManager();
        try {
            (async () => {
                const data: IProductsData = await productSearch.searchProducts(searchWord);
                const result: IProduct[] = productForm(data);

                let count = 0;
                constants.productList = [];
                result.forEach((prod) => {
                    constants.productList.push(prod);
                    count += 1;
                });

                renderNewCatalog(count);
            })();
        } catch (error) {
            console.error('Error:', error);
        }
    }
}
