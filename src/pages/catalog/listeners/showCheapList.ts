// import { buildProductItem } from '../functions/product/buildProductItem';

export function showCheapList() {
    document.addEventListener('click', (event) => {
        const target = event.target as HTMLButtonElement;
        if (target.id === 'cheap-view') {
            // const result;
            // твой код, результат нужен в типе IProductResp[];
            // const prodList = document.getElementById('product-view') as HTMLDivElement;
            // prodList.innerHTML = '';
            // result.forEach((prod) => {
            //     prodList.append(buildProductItem(prod));
            // });
            // const quantity = document.querySelector('.quantity') as HTMLSpanElement;
            // quantity.textContent = `${result.length}`;
        }
    });
}
