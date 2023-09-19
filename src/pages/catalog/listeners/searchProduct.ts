import { ProductSearchManager } from '../../../server/search/search';
import { productForm } from '../../../server/function/productForm';
import { IProduct, IProductsData } from '../../../server/products/queryProductProjections';
import { constants } from '../../../data/constants';
import { renderNewCatalog } from '../functions/catalog/renderNewCatalog';

export function searchByButton(): void {
    document.addEventListener('click', async (event) => {
        const target = event.target as HTMLImageElement;

        if (target.id === 'search-button') {
            const searchInput = document.getElementById('search-input') as HTMLInputElement;
            const searchWord = searchInput.value;
            if (searchWord) {
                const productSearch = new ProductSearchManager();
                try {
                    const data: IProductsData = await productSearch.searchProducts(searchWord);
                    const result: IProduct[] = productForm(data);

                    let count = 0;
                    constants.productList = [];
                    result.forEach((prod) => {
                        constants.productList.push(prod);
                        count += 1;
                    });

                    renderNewCatalog(count);
                } catch (error) {
                    console.error('Error:', error);
                }
            }
        }
    });
}

export function searchByEnter(): void {
    document.addEventListener('keypress', async (event) => {
        const target = event.target as HTMLInputElement;
        if (target.classList.contains('search-input') && event.key === 'Enter') {
            event.preventDefault();
            const value: string = target.value;

            if (value) {
                const productSearch = new ProductSearchManager();
                try {
                    const data: IProductsData = await productSearch.searchProducts(value);
                    const result: IProduct[] = productForm(data);
                    return result;
                } catch (error) {
                    console.error('Error:', error);
                }
            }
        }
    });
}
