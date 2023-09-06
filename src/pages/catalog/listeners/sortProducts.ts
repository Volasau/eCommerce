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
                const chain = document.getElementById('row-chain') as HTMLElement;
                const chainChildren: HTMLCollectionOf<HTMLSpanElement> = chain.getElementsByTagName('span');
                const currCategoryLastTagId: string = chainChildren[chainChildren.length - 1].id;
                if (currCategoryLastTagId === 'catalog-chain') {
                    mainCatalogSort(result);
                } else {
                    subCategorySort(result, currCategoryLastTagId);
                }
                sortAlphaStyle(result, target);
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
                const chain = document.getElementById('row-chain') as HTMLElement;
                const chainChildren: HTMLCollectionOf<HTMLSpanElement> = chain.getElementsByTagName('span');
                const currCategoryLastTagId: string = chainChildren[chainChildren.length - 1].id;
                if (currCategoryLastTagId === 'catalog-chain') {
                    mainCatalogSort(result);
                } else {
                    subCategorySort(result, currCategoryLastTagId);
                }
                sortCheapStyle(result, target);
            } catch (error) {
                console.error('Error:', error);
            }
        }
    });
}

function mainCatalogSort(result: IProductResp[]) {
    const prodList = document.getElementById('product-view') as HTMLDivElement;
    console.log(prodList);
    prodList.innerHTML = '';
    result.forEach((prod) => {
        prodList.append(buildProductItem(prod));
    });
}

function subCategorySort(result: IProductResp[], currCategoryLastTagId: string) {
    const currCategoryIdArr: string[] = currCategoryLastTagId.split('-');
    currCategoryIdArr.splice(-2);
    const currCategoryId: string = currCategoryIdArr.join('-');
    const catTest = categoryRelatedIds() as string[];
    if (catTest) {
        catTest.unshift(currCategoryId);
        const prodList = document.getElementById('product-view') as HTMLDivElement;
        prodList.innerHTML = '';
        result.forEach((prod) => {
            console.log(prod.categories[0].id);
            if (catTest.includes(prod.categories[0].id)) {
                prodList.append(buildProductItem(prod));
            }
        });
    } else {
        const prodList = document.getElementById('product-view') as HTMLDivElement;
        console.log(prodList);
        prodList.innerHTML = '';
        result.forEach((prod) => {
            if (prod.categories[0].id === currCategoryId) {
                prodList.append(buildProductItem(prod));
            }
        });
    }
}

function categoryRelatedIds() {
    if (document.getElementById('category-view')) {
        const catViewElem = document.getElementById('category-view') as HTMLElement;

        const catItemElem: NodeListOf<Element> = catViewElem.querySelectorAll('.sub-card-dark');
        if (catItemElem.length > 0) {
            const subIdsArr: string[] = [];
            for (let i = 0; i < catItemElem.length; i++) {
                const subId: string[] = catItemElem[i].id.split('-');
                subId.splice(-1);
                const currSubId: string = subId.join('-');
                subIdsArr.push(currSubId);
            }
            console.log(subIdsArr);
            return subIdsArr;
        }
    }
}

function sortAlphaStyle(result: IProductResp[], target: HTMLButtonElement) {
    const quantity = document.querySelector('.quantity') as HTMLSpanElement;
    quantity.textContent = `${result.length}`;

    const alpha = document.getElementById('alpha-view') as HTMLButtonElement;
    alpha.style.color = '';
    target.style.color = 'rgb(88, 200, 245)';
    target.style.color = 'rgb(88, 200, 245)';
}

function sortCheapStyle(result: IProductResp[], target: HTMLButtonElement) {
    const quantity = document.querySelector('.quantity') as HTMLSpanElement;
    quantity.textContent = `${result.length}`;

    const cheap = document.getElementById('cheap-view') as HTMLButtonElement;
    cheap.style.color = '';
    target.style.color = 'rgb(88, 200, 245)';
    target.style.color = 'rgb(88, 200, 245)';
}
