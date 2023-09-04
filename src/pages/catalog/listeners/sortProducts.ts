import { productForm } from '../../../server/function/productForm';
import { ProductSort } from '../../../server/sort/sort';

export function sortByCheap() {
    document.addEventListener('click', async (event) => {
        const target = event.target as HTMLButtonElement;

        if (target.id === 'cheap-view') {
            try {
                const productSort = new ProductSort();
                const data = await productSort.sortByPrice();
                const result = productForm(data);
                return result;
            } catch (error) {
                console.error('Error:', error);
            }
        }
    });
}

export function sortByAlphabet() {
    document.addEventListener('click', async (event) => {
        const target = event.target as HTMLButtonElement;

        if (target.id === 'alpha-view') {
            try {
                const productSort = new ProductSort();
                const data = await productSort.sortByName();
                const result = productForm(data);
                return result;
            } catch (error) {
                console.error('Error:', error);
            }
        }
    });
}
