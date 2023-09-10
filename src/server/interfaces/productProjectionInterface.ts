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

export interface IVariantProps {
    variantAttr: IAttributes[];
    variantImg: IImages[];
    variantPrices: IPricesStr[];
}
