import { productForm } from '../../../server/function/productForm';
import { ProductSort } from '../../../server/sort/sort';
import { changeQuantity } from '../functions/catalog/changeQuantity';
import { buildProductItem } from '../functions/product/buildProductItem';
import { IProductResp } from '../interfaces/categoryResponse/categoryResponseInterface';

export function sortByValue(value: string) {
    document.addEventListener('click', async (event) => {
        const target = event.target as HTMLButtonElement;

        if (target.id === value) {
            try {
                const productSort = new ProductSort();
                let result: IProductResp[] = [];
                if (value === 'cheap-view') {
                    const data = await productSort.sortBy('price asc');
                    result = productForm(data);
                } else if (value === 'alpha-view') {
                    const data = await productSort.sortBy('name.en asc');
                    result = productForm(data);
                }
                const chain = document.getElementById('row-chain') as HTMLElement;
                const chainChildren: HTMLCollectionOf<HTMLSpanElement> = chain.getElementsByTagName('span');
                const currCategoryLastTagId: string = chainChildren[chainChildren.length - 1].id;
                if (currCategoryLastTagId === 'catalog-chain') {
                    mainCatalogSort(result);
                } else {
                    subCategorySort(result, currCategoryLastTagId);
                }
                sort(target);
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

function sort(target: HTMLButtonElement) {
    changeQuantity();

    const choice = target.textContent === 'CHEAP' ? 'alpha' : 'cheap';
    const secondBut = document.getElementById(`${choice}-view`) as HTMLButtonElement;
    secondBut.style.color = '';
    target.style.color = 'rgb(88, 200, 245)';
    target.style.color = 'rgb(88, 200, 245)';
}
