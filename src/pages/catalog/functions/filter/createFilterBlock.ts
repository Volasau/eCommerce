import { buttonHTML, divHTML, formHTML, selectHTML } from '../../classes/elementBuilder';
import { ICategory } from '../../interfaces/categoryInterface';
import { createBrandFilterBlock } from './createBrandFilterBlock';
import { createPriceFilter } from './createPriceFilter';
import { getAttributesFromObjs } from './getAttributesFromObjects';

export function createFilterBlock(categories: ICategory[]): HTMLFormElement {
    const priceFilter = createPriceFilter();
    const brandFilter = createBrandFilterBlock(categories);
    const mainWrap = formHTML.getElement('', 'other-attr-wrap', 'attr') as HTMLFormElement;
    mainWrap.append(priceFilter, brandFilter);

    const otherAttributes = getAttributesFromObjs(categories);
    otherAttributes.forEach((attr) => {
        const name = attr.attribute;
        if (name.toLowerCase() !== 'brand') {
            const wrapper = divHTML.getElement('', `${name}-wrap`, 'filter') as HTMLDivElement;
            const attrName = divHTML.getElement(name, `${name}-name`, 'inner') as HTMLDivElement;
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
            wrapper.append(attrName, selectBlock);
            mainWrap.append(wrapper);
        }
    });

    const resetWrap = divHTML.getElement('', 'reset-wrap', 'filter') as HTMLDivElement;
    const reset = buttonHTML.getElement('RESET', 'reset-but', 'reset') as HTMLButtonElement;
    reset.setAttribute('from', 'other-attr-wrap');
    reset.type = 'reset';
    resetWrap.append(reset);
    mainWrap.append(resetWrap);

    return mainWrap;
}
