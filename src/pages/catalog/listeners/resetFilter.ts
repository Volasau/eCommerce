import { getCartManager } from '../../../server/cart/getCartById';
import { createCartLogic } from '../../../server/function/addCartLogic';
import { categoryResponse } from '../../../server/function/structureCategories';
import { Cart } from '../../basket/interfaces/cartInterface';
import { changeQuantity } from '../functions/catalog/changeQuantity';
import { openCategoryPage } from '../functions/catalog/openCategoryPage';
import { openSubcategoryPage } from '../functions/catalog/openSubcategoryPage';
import { buildProductItem } from '../functions/product/buildProductItem';

export function resetFilter(): void {
    document.addEventListener('click', (event) => {
        const target = event.target as HTMLButtonElement;
        if (target.id === 'reset-but') {
            const productList = document.getElementById('product-view') as HTMLDivElement;
            productList.innerHTML = '';
            const chain = document.getElementById('row-chain') as HTMLSpanElement;
            const chainCount = chain.children.length;
            const lastChainElem = chain.lastElementChild as HTMLSpanElement;
            const preLastChainElem = lastChainElem.previousElementSibling as HTMLSpanElement;
            const nameChainElem = preLastChainElem.textContent;

            (async () => {
                await createCartLogic();
                const cart = (await getCartManager.getCartById(sessionStorage.newCartId)) as Cart;
                if (chainCount === 4) {
                    categoryResponse.forEach((cat) => {
                        cat.subcategories.forEach((sub) => {
                            sub.products.forEach((prod) => {
                                productList.append(buildProductItem(prod, cart));
                                changeQuantity();
                            });
                        });
                    });
                } else {
                    categoryResponse.forEach((cat) => {
                        cat.subcategories.forEach((sub) => {
                            if (nameChainElem === sub.name.en || nameChainElem === cat.name.en) {
                                switch (chainCount) {
                                    case 6:
                                        openCategoryPage(cat);
                                        changeQuantity();
                                        break;
                                    case 8:
                                        openSubcategoryPage(sub);
                                        changeQuantity();
                                        break;
                                }
                            }
                        });
                    });
                }
            })();
        }
    });
}
