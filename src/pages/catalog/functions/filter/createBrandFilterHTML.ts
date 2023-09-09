import { divHTML, selectHTML } from '../../classes/elementBuilder';

export function createBrandFilterHTML(brandValues: string[]): HTMLDivElement {
    const wrapper = divHTML.getElement('', 'brand-wrap', 'filter') as HTMLDivElement;
    const brandName = divHTML.getElement('Brand', 'brand-name', 'brand-inner') as HTMLDivElement;
    const selectBlock = divHTML.getElement('', 'brand-selectBlock', 'selBlock') as HTMLDivElement;
    const select = selectHTML.getElement('', 'brand-select', 'select-inner') as HTMLSelectElement;
    const firstOption = document.createElement('option') as HTMLOptionElement;
    firstOption.text = '-please choose a brand-';
    select.add(firstOption);
    brandValues.forEach((brand) => {
        const option = document.createElement('option') as HTMLOptionElement;
        option.text = brand;
        select.add(option);
    });
    selectBlock.append(select);
    wrapper.append(brandName, selectBlock);
    return wrapper;
}
