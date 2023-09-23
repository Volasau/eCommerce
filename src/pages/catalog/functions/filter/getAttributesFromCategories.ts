import { IAttr } from '../../interfaces/attr.interfaces';
import { ICategory } from '../../interfaces/category.interfaces';

export function getAttributesFromCategories(categories: ICategory[]): IAttr[] {
    let allAttr: IAttr[] = [];
    let attrList: string[] = [];
    const attrResult: IAttr[] = [];

    categories.forEach((cat) => {
        allAttr = [...allAttr, ...cat.attributes];
    });

    attrList = Array.from(new Set(allAttr.map((attr) => attr.attribute)));

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
