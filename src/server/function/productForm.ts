import { constants } from '../../data/constants';
import {
    IAllVariants,
    IAttributes,
    ICategories,
    IImages,
    IPricesStr,
    IProduct,
    IProductProjection,
    IVariantObj,
} from '../../server/products/queryProductProjections';

import { IProductResp } from '../../pages/catalog/interfaces/categoryResponse/categoryResponseInterface';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function productForm(data: any) {
    const productsWithAttributes = data.results.map((product: IProductProjection) => {
        const categoriesArr: ICategories[] = [...product.categories];
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const variantObjs: any[] = [];
        product.variants.map((variant) => {
            const { attributes, images, prices } = variant;
            const variantAttr: IAttributes[] = [...attributes];
            const variantImg: IImages[] = [...images];
            const variantPrices: IPricesStr[] = [...prices];

            const variantObj: IVariantObj = {
                variantAttr,
                variantImg,
                variantPrices,
            };

            variantObjs.push(variantObj);
        });

        const allVarAttrArr: IAttributes[] = [
            ...variantObjs.reduce((acc, variant) => [...acc, ...variant.variantAttr], []),
        ];
        const allVarImgArr: IImages[] = [...variantObjs.reduce((acc, variant) => [...acc, ...variant.variantImg], [])];
        const allVarPricesArr: IPricesStr[] = [
            ...variantObjs.reduce((acc, variant) => [...acc, ...variant.variantPrices], []),
        ];

        const allVariants: IAllVariants[] = [
            {
                attributesRaw: product.masterVariant.attributes,
                images: product.masterVariant.images,
                prices: product.masterVariant.prices,
            },
            {
                attributesRaw: allVarAttrArr,
                images: allVarImgArr,
                prices: allVarPricesArr,
            },
        ];

        const productObj: IProduct = {
            id: product.id,
            name: product.name.en,
            description: product.description.en,
            categories: categoriesArr,
            allVariants,
        };
        return productObj;
    });
    constants.productList = [];
    productsWithAttributes.forEach((product: IProductResp) => {
        constants.productList.push(product);
        console.log('constants:', constants.productList);
    });
    return productsWithAttributes;
}
