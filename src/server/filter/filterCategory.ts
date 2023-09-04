import fetch from 'node-fetch';
import { constants } from '../../data/constants';
import { bearer_token_cc } from '../..';
import {
    IAllVariants,
    IAttributes,
    ICategories,
    IImages,
    IPricesStr,
    IProduct,
    IProductProjection,
    IVariantObj,
} from '../products/queryProductProjections';
import { IProductResp } from '../../pages/catalog/interfaces/categoryResponse/categoryResponseInterface';

export class ProductFilter {
    projectKey: string;
    baseURL: string;

    constructor() {
        this.projectKey = constants.projectKey;
        this.baseURL = `https://api.europe-west1.gcp.commercetools.com/${this.projectKey}/product-projections/search?limit=60`;
    }

    async filterByBrand(url: string) {
        try {
            const fullUrl: string = url;
            const response = await fetch(fullUrl, {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${await bearer_token_cc}`,
                    'Content-Type': 'application/json',
                },
            });
            const data = await response.json();

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
                const allVarImgArr: IImages[] = [
                    ...variantObjs.reduce((acc, variant) => [...acc, ...variant.variantImg], []),
                ];
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
            });
            return productsWithAttributes;
        } catch (error) {
            console.error('Error:', error);
            throw error;
        }
    }
}
