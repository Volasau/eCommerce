import fetch from 'node-fetch';
import { constants } from '../../data/constants';
import { bearer_token_cc } from '../..';
import { IProductResp } from '../../pages/catalog/interfaces/categoryResponse/categoryResponseInterface';

export interface IImageDimensions {
    w: number;
    h: number;
}

export interface IImages {
    url: string;
    label: string;
    dimensions?: IImageDimensions;
}

export interface IValue {
    key: string;
    label: string;
}

export interface IAttributes {
    name: string;
    value: IValue[];
}

export interface IMasterVariant {
    id: number;
    sku: string;
    key: string;
    prices: IPricesStr[];
    images: IImages[];
    attributes: IAttributes[];
    assets: [];
}

export interface IVariants {
    id: number;
    sku: string;
    key: string;
    prices: IPricesStr[];
    images: IImages[];
    attributes: IAttributes[];
    assets: [];
}

export interface IName {
    en: string;
}

export interface IDescription {
    en: string;
}

export interface ICategories {
    typeId: string;
    id: string;
}

export interface ISuggestTokenizer {
    type: string;
}

export interface ISearchKeyWordsSub {
    text: string;
    suggestTokenizer: ISuggestTokenizer;
}

export interface ISearchKeyWords {
    en: ISearchKeyWordsSub[];
}

export interface IProductProjection {
    id: string;
    version: number;
    productType: ICategories;
    name: IName;
    description: IDescription;
    categories: ICategories[];
    categoryOrderHints: Record<string, never>;
    slug: IName;
    metaTitle: IName;
    metaDescription: IDescription;
    masterVariant: IMasterVariant;
    variants: IVariants[];
    searchKeywords: ISearchKeyWords;
    hasStagedChanges: boolean;
    published: boolean;
    key: string;
    priceMode: string;
    createdAt: string;
    lastModifiedAt: string;
}

export interface ICategories {
    id: string;
}

export interface IPricesStrValue {
    centAmount: number;
    currencyCode: string;
}

export interface IDiscountedStr {
    value: IPricesStrValue;
}

export interface IPricesStr {
    discounted: IDiscountedStr | null;
    value: IPricesStrValue;
}

export interface IAllVariants {
    attributesRaw: IAttributes[];
    images: IImages[];
    prices: IPricesStr[];
}

export interface IProduct {
    id: string;
    name: string;
    description: string;
    categories: ICategories[];
    allVariants: IAllVariants[];
}

export interface IVariantObj {
    variantAttr: IAttributes[];
    variantImg: IImages[];
    variantPrices: IPricesStr[];
}

export class QueryProductProjections {
    projectKey: string;
    apiUrl: string;
    constructor() {
        this.projectKey = constants.projectKey;
        this.apiUrl = `https://api.europe-west1.gcp.commercetools.com/${this.projectKey}`;
    }

    async getAllProducts(): Promise<IProductResp[]> {
        try {
            const response = await fetch(`${this.apiUrl}/product-projections?limit=60`, {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${await bearer_token_cc}`,
                    'Content-Type': 'application/json',
                },
            });

            if (!response.ok) {
                throw new Error(`Failed to fetch products: ${response.statusText}`);
            }

            const data = await response.json();

            const productsWithAttributes: IProductResp[] = data.results.map((product: IProductProjection) => {
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
            return productsWithAttributes;
        } catch (error) {
            console.error('An error occurred:', error);
            throw error;
        }
    }
}
