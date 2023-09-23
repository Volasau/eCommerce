import { IAttributes } from '../../../../server/products/queryProductProjections';
import { IAttr } from '../../interfaces/attr.interfaces';
import { IAttrValueResp, ISubCategoryResp } from '../../interfaces/categoryResponse/categoryResponse.interfaces';

export function getAllAttrFromProducts(subCategory: ISubCategoryResp): IAttr[] {
    const result: IAttr[] = [];

    const allAttrList: IAttributes[] = [];
    subCategory.products.forEach((product) => {
        product.allVariants.forEach((variant) => {
            variant.attributesRaw.forEach((attr) => {
                allAttrList.push(attr);
            });
        });
    });

    const allAttrNames: string[] = [];
    allAttrList.forEach((attr) => {
        allAttrNames.push(attr.name);
    });

    const uniqueAttrs = Array.from(new Set(allAttrNames));
    uniqueAttrs.forEach((attr) => {
        result.push({ attribute: attr, values: [] });
    });

    allAttrList.forEach((attr) => {
        result.forEach((uniqAttr) => {
            if (attr.name === uniqAttr.attribute) {
                if (Array.isArray(attr.value)) {
                    const attibute = attr.value as IAttrValueResp[];
                    uniqAttr.values = [...uniqAttr.values, ...[attibute[0].label]];
                } else {
                    const attibute = attr.value as IAttrValueResp;
                    uniqAttr.values = [...uniqAttr.values, ...[attibute.label]];
                }
            }
        });
    });

    result.forEach((attr) => {
        attr.values = Array.from(new Set(attr.values));
    });

    return result;
}
