import { productForm } from '../../../server/function/productForm';
import { ProductSort } from '../../../server/sort/sort';
import { buildProductItem } from '../functions/product/buildProductItem';
import { IProductResp } from '../interfaces/categoryResponse/categoryResponseInterface';

export function sortByCheap() {
    document.addEventListener('click', async (event) => {
        const target = event.target as HTMLButtonElement;

        if (target.id === 'cheap-view') {
            try {
                const productSort = new ProductSort();
                const data = await productSort.sortByPrice();
                const result: IProductResp[] = productForm(data);
                console.log(result);

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
    });
}

export function sortByAlphabet() {
    document.addEventListener('click', async (event) => {
        const target = event.target as HTMLButtonElement;

        if (target.id === 'alpha-view') {
            try {
                const productSort = new ProductSort();
                const data = await productSort.sortByName();
                const result: IProductResp[] = productForm(data);

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
    });
}
