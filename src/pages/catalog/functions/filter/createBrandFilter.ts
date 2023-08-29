import { divHTML, selectHTML } from '../../classes/elementBuilder';

export function createBrandFilter(brandValues: string[]) {
    const wrapper = divHTML.getElement('', 'brand-wrap', 'brand') as HTMLDivElement;
    const brandName = divHTML.getElement('Brand', 'brand-name', 'brand-inner') as HTMLDivElement;
    const selectBlock = divHTML.getElement('', 'brand-selectBlock', 'brand-inner') as HTMLDivElement;
    const select = selectHTML.getElement('', 'brand-select', 'select') as HTMLSelectElement;
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
