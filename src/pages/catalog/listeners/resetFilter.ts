import { constants } from '../../../data/constants';
import { categoryResponse } from '../../../server/function/structureCategories';
import { openCategoryPage } from '../functions/catalog/openCategoryPage';
import { openSubcategoryPage } from '../functions/catalog/openSubcategoryPage';
import { renderNewCatalog } from '../functions/catalog/renderNewCatalog';

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

            if (chainCount === 4) {
                let count = 0;
                constants.productList = [];
                categoryResponse.forEach((cat) => {
                    cat.subcategories.forEach((sub) => {
                        sub.products.forEach((prod) => {
                            constants.productList.push(prod);
                            count += 1;
                        });
                    });
                });

                renderNewCatalog(count);
            } else {
                categoryResponse.forEach((cat) => {
                    cat.subcategories.forEach((sub) => {
                        if (nameChainElem === sub.name.en || nameChainElem === cat.name.en) {
                            switch (chainCount) {
                                case 6:
                                    openCategoryPage(cat);
                                    break;
                                case 8:
                                    openSubcategoryPage(sub);
                                    break;
                            }
                        }
                    });
                });
            }
        }
    });
}
