import { constants } from '../../../data/constants';
import { buildproductPage } from '../functions/buildproductPage';

export function openProductPage() {
    document.addEventListener('click', (event) => {
        const target = event.target as HTMLElement;
        if (target.classList.contains('min')) {
            constants.productList.forEach((product) => {
                console.log(product.id);
                console.log(target.id.split('-').slice(0, -1).join('-'));
                if (product.id === target.id.split('-').slice(0, -1).join('-')) {
                    const h1 = document.querySelector('h1') as HTMLElement;
                    const prodList = document.querySelector('.prod-list') as HTMLDivElement;
                    prodList.remove();
                    h1.after(buildproductPage(product));
                    console.log(h1);
                }
            });
        }
    });
}