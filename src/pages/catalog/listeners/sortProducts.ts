import { constants } from '../../../data/constants';
import { productForm } from '../../../server/function/productForm';
import { IProduct } from '../../../server/products/queryProductProjections';
import { ProductSort } from '../../../server/sort/sort';
import { renderNewCatalog } from '../functions/catalog/renderNewCatalog';

export function sortByValue(target: HTMLElement): void {
    (async () => {
        try {
            const productSort = new ProductSort();
            let result: IProduct[] = [];
            if (target.id === 'cheap-view') {
                const data = await productSort.sortBy('price asc');
                result = productForm(data);
            } else if (target.id === 'alpha-view') {
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
    })();
}

function mainCatalogSort(result: IProduct[]): void {
    let count = 0;
    constants.productList = [];
    result.forEach((prod) => {
        constants.productList.push(prod);
        count += 1;
    });

    renderNewCatalog(count);
}

function subCategorySort(result: IProduct[], currCategoryLastTagId: string): void {
    const currCategoryIdArr: string[] = currCategoryLastTagId.split('-');
    currCategoryIdArr.splice(-2);
    const currCategoryId: string = currCategoryIdArr.join('-');
    const catTest = categoryRelatedIds() as string[];
    if (catTest) {
        catTest.unshift(currCategoryId);
        let count = 0;
        constants.productList = [];
        result.forEach((prod) => {
            if (catTest.includes(prod.categories[0].id)) {
                constants.productList.push(prod);
                count += 1;
            }
        });

        renderNewCatalog(count);
    } else {
        let count = 0;
        constants.productList = [];
        result.forEach((prod) => {
            if (prod.categories[0].id === currCategoryId) {
                constants.productList.push(prod);
                count += 1;
            }
        });

        renderNewCatalog(count);
    }
}

function categoryRelatedIds(): string[] | void {
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
            return subIdsArr;
        }
    }
}

function sort(target: HTMLElement): void {
    const choice = target.textContent === 'CHEAP' ? 'alpha' : 'cheap';
    const secondBut = document.getElementById(`${choice}-view`) as HTMLButtonElement;
    secondBut.style.color = '';
    target.style.color = 'rgb(88, 200, 245)';
    target.style.color = 'rgb(88, 200, 245)';
}
