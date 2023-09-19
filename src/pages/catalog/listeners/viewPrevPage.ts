import { constants } from '../../../data/constants';
import { getCartManager } from '../../../server/cart/getCartById';
import { createCartLogic } from '../../../server/function/addCartLogic';
import { Cart } from '../../basket/interfaces/cartInterface';
import { divHTML } from '../classes/elementBuilder';
import { buildProductItem } from '../functions/product/buildProductItem';

export function viewPrevPage() {
    document.addEventListener('click', (event) => {
        const target = event.target as HTMLButtonElement;
        if (target.id === 'prev-prod') {
            (async () => {
                await createCartLogic();
                const cart = (await getCartManager.getCartById(sessionStorage.newCartId)) as Cart;
                const prodView = document.getElementById('product-view-list') as HTMLDivElement;
                const viewer = document.getElementById('product-view') as HTMLDivElement;
                viewer.remove();

                const newViewer = divHTML.getElement('', 'product-view', 'viewer-prod') as HTMLDivElement;
                const nextBut = document.getElementById('next-prod') as HTMLButtonElement;
                nextBut.disabled = false;

                constants.page -= 1;
                if (constants.page === 0) target.disabled = true;
                let i = constants.page * 6;
                const last = i + 6;
                for (i; i < last; i += 1) {
                    if (constants.productList[i]) {
                        const product = buildProductItem(constants.productList[i], cart);
                        newViewer.append(product);
                    }
                }

                prodView.prepend(newViewer);
                console.log(constants.page);
            })();
        }
    });
}
