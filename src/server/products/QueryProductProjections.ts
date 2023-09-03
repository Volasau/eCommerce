import fetch from 'node-fetch';
import { constants } from '../../data/constants';
import { bearer_token_cc } from '../..';

interface IImageDimensions {
    w: number;
    h: number;
}

interface IImages {
    url: string;
    label: string;
    dimensions?: IImageDimensions;
}

interface IValue {
    key: string;
    label: string;
}

interface IAttributes {
    name: string;
    value: IValue[];
}

interface IMasterVariant {
    id: number;
    sku: string;
    key: string;
    prices: IPricesStr[];
    images: IImages[];
    attributes: IAttributes[];
    assets: [];
}

interface IVariants {
    id: number;
    sku: string;
    key: string;
    prices: IPricesStr[];
    images: IImages[];
    attributes: IAttributes[];
    assets: [];
}
interface IName {
    en: string;
}

interface IDescription {
    en: string;
}

interface ICategories {
    typeId: string;
    id: string;
}

interface ISuggestTokenizer {
    type: string;
}

interface ISearchKeyWordsSub {
    text: string;
    suggestTokenizer: ISuggestTokenizer;
}

interface ISearchKeyWords {
    en: ISearchKeyWordsSub[];
}

interface IProductProjection {
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

interface ICategories {
    id: string;
}

interface IPricesStrValue {
    centAmount: number;
    currencyCode: string;
}

interface IDiscountedStr {
    value: IPricesStrValue;
}

interface IPricesStr {
    discounted: IDiscountedStr | null;
    value: IPricesStrValue;
}

interface IAllVariants {
    attributesRaw: IAttributes[];
    images: IImages[];
    prices: IPricesStr[];
}

interface IProduct {
    id: string;
    name: string;
    description: string;
    categories: ICategories[];
    allVariants: IAllVariants[];
}

interface IVariantObj {
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

    async getAllProducts() {
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

            // Filter and process the product data
            const productsWithAttributes = data.results.map((product: IProductProjection) => {
                // const { id, name, description, categories, masterVariant, variants } = product;
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
            console.log(productsWithAttributes);
            return productsWithAttributes;
        } catch (error) {
            console.error('An error occurred:', error);
            throw error;
        }
    }
}
