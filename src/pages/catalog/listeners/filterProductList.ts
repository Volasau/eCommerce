interface ISelectedFilters {
    [key: string]: string[] | undefined;
}

import { ProductFilter } from '../../../server/filter/filterCategory';
import { buildProductItem } from '../functions/product/buildProductItem';
import { IProductResp } from '../interfaces/categoryResponse/categoryResponseInterface';
const productFilter = new ProductFilter();

export function filterProductList() {
    const selectedFilters: ISelectedFilters = {};

    document.addEventListener('change', async (event) => {
        const target = event.target as HTMLInputElement;
        if (target.classList.contains('select-inner') || target.classList.contains('select')) {
            const attribute: string = target.id.split('-')[0];
            const value: string = target.value;

            if (attribute && value) {
                selectedFilters[attribute] = [value];
            }
            try {
                const filteredProductsList: IProductResp[] = await filterProducts(selectedFilters);
                const quantity = document.querySelector('.quantity') as HTMLSpanElement;
                quantity.textContent = `${filteredProductsList.length}`;

                const prodList = document.getElementById('product-view') as HTMLDivElement;
                prodList.innerHTML = '';
                filteredProductsList.forEach((prod) => {
                    prodList.append(buildProductItem(prod));
                });
            } catch (error) {
                console.error('Error filtering products:', error);
            }
        }
    });
}

async function filterProducts(selectedFilters: ISelectedFilters) {
    const filterParams: string[] = [];

    for (const attribute in selectedFilters) {
        const values = selectedFilters[attribute] as string[];
        const filteredValues = values.filter((value) => !value.toLowerCase().includes('please'));

        if (filteredValues.length > 0) {
            const isAttributePresent = filterParams.some((param) => param.includes(attribute));

            if (!isAttributePresent) {
                const param: string = filteredValues
                    .map(
                        (value) =>
                            `filter=variants.attributes.${attribute}.key:"${attribute}-${encodeURIComponent(
                                value.toLowerCase()
                            )}"`
                    )
                    .join('&');
                filterParams.push(param);
            }
        }
    }

    const queryString = filterParams.join('&');

    const fullUrl = `${productFilter.baseURL}&${queryString}`;
    const filteredProducts = await productFilter.filterByBrand(fullUrl);
    return filteredProducts;
}
