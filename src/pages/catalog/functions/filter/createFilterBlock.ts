import { buttonHTML, divHTML, selectHTML } from '../../classes/elementBuilder';
import { ICategory } from '../../interfaces/categoryInterface';
import { createBrandFilterBlock } from './createBrandFilterBlock';
import { createPriceFilter } from './createPriceFilter';
import { getAttributesFromObjects } from './getAttributesFromObjects';

export function createFilterBlock(categories: ICategory[]): HTMLDivElement {
    const priceFilter = createPriceFilter();
    const brandFilter = createBrandFilterBlock(categories);
    const mainWrap = divHTML.getElement('', 'other-attr-wrap', 'attr') as HTMLDivElement;
    mainWrap.append(priceFilter, brandFilter);

    const otherAttributes = getAttributesFromObjects(categories);
    otherAttributes.forEach((attr) => {
        const name = attr.attribute;
        if (name.toLowerCase() !== 'brand') {
            const wrapper = divHTML.getElement('', `${name}-wrap`, 'filter') as HTMLDivElement;
            const brandName = divHTML.getElement(name, `${name}-name`, 'inner') as HTMLDivElement;
            const selectBlock = divHTML.getElement('', `${name}-selectBlock`, 'selBlock') as HTMLDivElement;
            const select = selectHTML.getElement('', `${name}-select`, 'select-inner') as HTMLSelectElement;
            const firstOption = document.createElement('option') as HTMLOptionElement;
            firstOption.text = `-please choose a ${name}-`;
            select.add(firstOption);
            attr.values.forEach((value) => {
                const option = document.createElement('option') as HTMLOptionElement;
                option.text = value;
                select.add(option);
            });
            selectBlock.append(select);
            wrapper.append(brandName, selectBlock);
            mainWrap.append(wrapper);
        }
    });

    const resetWrap = divHTML.getElement('', 'reset-wrap', 'filter') as HTMLDivElement;
    const reset = buttonHTML.getElement('RESET', 'reset-but', 'reset') as HTMLButtonElement;
    resetWrap.append(reset);
    mainWrap.append(resetWrap);

    return mainWrap;
}
