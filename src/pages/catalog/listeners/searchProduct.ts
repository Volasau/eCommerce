import { ProductSearchManager } from '../../../server/search/search';
import { productForm } from '../../../server/function/productForm';
import { buildProductItem } from '../functions/product/buildProductItem';
import { IProduct, IProductsData } from '../../../server/products/queryProductProjections';

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

                    const prodList = document.getElementById('product-view') as HTMLDivElement;
                    prodList.innerHTML = '';
                    result.forEach((prod) => {
                        prodList.append(buildProductItem(prod));
                    });
                    const quantity = document.querySelector('.quantity') as HTMLSpanElement;
                    quantity.textContent = `${result.length}`;
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
