import { constants } from '../../../../data/constants';
import { divHTML, inpHTML } from '../../classes/elementBuilder';

export function createPriceFilter() {
    let maxProductPrice = 0;
    constants.productList.forEach((cat) => {
        cat.allVariants.forEach((sub) => {
            sub.prices.forEach((price) => {
                if (price.discounted) {
                    maxProductPrice = Math.max(maxProductPrice, price.discounted.value.centAmount);
                } else {
                    maxProductPrice = Math.max(maxProductPrice, price.value.centAmount);
                }
            });
        });
    });

    const wrapper = divHTML.getElement('', 'price-filter-wrap', 'price-filter') as HTMLDivElement;
    const priceName = divHTML.getElement('Price', 'price-filter-name', 'price-filter-inner') as HTMLDivElement;
    const pricesBlock = divHTML.getElement('', 'price-filter-block', 'price-filter-inner') as HTMLDivElement;
    const priceMinBlock = divHTML.getElement('', 'filter-min-block', 'price-filter-block-inner') as HTMLDivElement;
    const priceMin = inpHTML.getElement('', 'min-filter-price', 'price-filter-min') as HTMLInputElement;
    const labelMin = document.createElement('label') as HTMLLabelElement;
    labelMin.setAttribute('for', priceMin.id);
    labelMin.textContent = 'min';
    const priceMaxBlock = divHTML.getElement('', 'filter-max-block', 'price-filter-block-inner') as HTMLDivElement;
    const priceMax = inpHTML.getElement('', 'max-filter-price', 'price-filter-max') as HTMLInputElement;
    const labelMax = document.createElement('label') as HTMLLabelElement;
    labelMax.setAttribute('for', priceMax.id);
    labelMax.textContent = 'max';
    priceMin.placeholder = '0';
    priceMax.placeholder = String(maxProductPrice);

    priceMaxBlock.append(labelMax, priceMax);
    priceMinBlock.append(labelMin, priceMin);

    pricesBlock.append(priceMinBlock, priceMaxBlock);
    wrapper.append(priceName, pricesBlock);

    return wrapper;
}
