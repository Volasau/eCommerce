interface ISelectedFilters {
    [key: string]: string[] | undefined;
}

import { ProductFilter } from '../../../server/filter/filterCategory';
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
                console.log(selectedFilters);
            }
            try {
                const filteredProducts = await filterProducts(selectedFilters);

                console.log('Filtered products:', filteredProducts);
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
            // Check if this attribute has already been added to filterParams
            const isAttributePresent = filterParams.some((param) => param.includes(attribute));

            // If it's not present, add it to filterParams
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
    console.log('FullUrl:', fullUrl);
    const filteredProducts = await productFilter.filterByBrand(fullUrl);
    return filteredProducts;
}
