import { IAttr } from '../../interfaces/attrInterface';
import { ICategory } from '../../interfaces/categoryInterface';

export function getAttributesFromObjs(categories: ICategory[]): IAttr[] {
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
