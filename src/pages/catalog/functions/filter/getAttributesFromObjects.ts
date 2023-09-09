import { IAttr } from '../../interfaces/attrInterface';
import { ICategory } from '../../interfaces/categoryInterface';

export function getAttributesFromObjs(categories: ICategory[]) {
    let allAttr: IAttr[] = [];
    let attrList: string[] = [];
    const attrResult: IAttr[] = [];

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

    return attrResult;
}
