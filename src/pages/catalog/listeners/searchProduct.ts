import { ProductSearchManager } from '../../../server/search/search';
import { productForm } from '../../../server/function/productForm';

export function searchByButton() {
    document.addEventListener('click', async (event) => {
        const target = event.target as HTMLImageElement;

        if (target.id === 'search-button') {
            const searchInput = document.getElementById('search-input') as HTMLInputElement;
            const searchWord = searchInput.value;
            if (searchWord) {
                const productSearch = new ProductSearchManager();
                try {
                    const data = await productSearch.searchProducts(searchWord);
                    const result = productForm(data);
                    return result;
                } catch (error) {
                    console.error('Error:', error);
                }
            }
        }
    });
}

export function searchByEnter() {
    document.addEventListener('keypress', async (event) => {
        const target = event.target as HTMLInputElement;
        if (target.classList.contains('search-input') && event.key === 'Enter') {
            event.preventDefault();
            const value: string = target.value;

            if (value) {
                const productSearch = new ProductSearchManager();
                try {
                    const data = await productSearch.searchProducts(value);
                    const result = productForm(data);
                    return result;
                } catch (error) {
                    console.error('Error:', error);
                }
            }
        }
    });
}
