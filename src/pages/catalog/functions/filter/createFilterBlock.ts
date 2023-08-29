import { divHTML, selectHTML } from '../../classes/elementBuilder';
import { IAttr } from '../../interfaces/attrInterface';
import { ICategory } from '../../interfaces/categoryInterface';
import { createBrandFilter } from './createBrandFilter';

export function createFilterBlock(categories: ICategory[]) {
    let allAttr: IAttr[] = [];
    let attrList: string[] = [];
    const attrResult: IAttr[] = [];

    // извлекаем все бренды из всех объектов категорий и дабавляем фильтр брендов в общий блок фильтров
    let brands: string[] = [];
    categories.forEach((cat) => {
        cat.attributes.forEach((attr) => {
            if (attr.attribute.toLowerCase() === 'brand') {
                brands = [...brands, ...attr.values];
            }
        });
    });

    const mainWrap = divHTML.getElement('', 'other-attr-wrap', 'attr') as HTMLDivElement;
    const brandFilter = createBrandFilter(Array.from(new Set(brands)));
    mainWrap.append(brandFilter);

    // извлекаем остальные атрибуты из объектов
    categories.forEach((cat) => {
        allAttr = [...allAttr, ...cat.attributes];
    });

    // удаляем дубликаты атрибутов
    attrList = Array.from(new Set(allAttr.map((attr) => attr.attribute)));

    // каждому уникальному атрибуту аккумулируем все возможные значения
    attrList.forEach((attr) => {
        attrResult.push({ attribute: attr, values: [] });
    });

    allAttr.forEach((attr) => {
        attrResult.forEach((attribute) => {
            if (attr.attribute === attribute.attribute) {
                attribute.values = [...attribute.values, ...attr.values];
            }
        });
    });

    allAttr.forEach((attr) => {
        attr.values = Array.from(new Set(attr.values));
    });

    //создаем блоки по каждому аттрибуту для фильтра и комплектуем в остновной блок фильтра
    attrResult.forEach((attr) => {
        const name = attr.attribute;
        if (name.toLowerCase() !== 'brand') {
            const wrapper = divHTML.getElement('', `${name}-wrap`, `${name}`) as HTMLDivElement;
            const brandName = divHTML.getElement(name, `${name}-name`, `${name}-inner`) as HTMLDivElement;
            const selectBlock = divHTML.getElement('', `${name}-selectBlock`, `${name}-inner`) as HTMLDivElement;
            const select = selectHTML.getElement('', `${name}-select`, 'select') as HTMLSelectElement;
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

    return mainWrap;
}
