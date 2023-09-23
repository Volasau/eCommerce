import { constants } from '../../data/constants';
import { request } from '../classes/requestClass';
import { productForm } from '../function/productForm';

export interface IImageDimensions {
    w: number;
    h: number;
}

export interface IImages {
    url: string;
    label: string | null;
    dimensions?: IImageDimensions;
}

export interface IValue {
    key: string;
    label?: string;
}

export interface IAttributes {
    name: string;
    value: IValue[];
}

export interface IVariant {
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

export interface ICategories {
    id: string;
    typeId?: string;
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

export interface IProductsData {
    count: number;
    facets: object;
    limit: number;
    offset: number;
    results: IProductProjection[];
    total: number;
}

export interface IProductProjection {
    id: string;
    version: number;
    productType: ICategories;
    name: IName;
    description: IName;
    categories: ICategories[];
    categoryOrderHints: Record<string, never>;
    slug: IName;
    metaTitle: IName;
    metaDescription: IName;
    masterVariant: IVariant;
    variants: IVariant[];
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
    typeId?: string;
}

export interface IPricesStrValue {
    centAmount: number;
    currencyCode: string;
    fractionDigits?: number;
    type?: string;
}

export interface IDiscountedStr {
    discount?: ICategories;
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
    variantAttr?: IAttributes[];
    variantImg?: IImages[];
    variantPrices?: IPricesStr[];
}

export class QueryProductProjections {
    async getAllProducts(): Promise<IProduct[]> {
        try {
            const url = `${constants.apiUrl}/product-projections?limit=60`;
            const response: Response = await request.getAuth(url);

            if (!response.ok) {
                throw new Error(`Failed to fetch products: ${response.statusText}`);
            }

            const data: IProductsData = await response.json();

            const result: IProduct[] = productForm(data);
            return result;
        } catch (error) {
            console.error('An error occurred:', error);
            throw error;
        }
    }
}
