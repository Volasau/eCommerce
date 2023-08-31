export interface IName {
    en: string;
}

export interface ICategoryIdResp {
    id: string;
}

export interface IAttrValueResp {
    key: string;
    label: string;
}

export interface IAttributeResp {
    name: string;
    value: IAttrValueResp | IAttrValueResp[];
}

export interface IImageResp {
    url: string;
    label: string | null;
}

export interface IPriceValueResp {
    centAmount: number;
    currencyCode: string;
}

export interface IDiscountResp {
    value: IPriceValueResp;
}

export interface IPriceResp {
    discounted: IDiscountResp | null;
    value: IPriceValueResp;
}

export interface IVariantResp {
    attributesRaw: IAttributeResp[];
    images: IImageResp[];
    prices: IPriceResp[];
}

export interface IProductResp {
    id: string;
    name: string;
    description: string;
    categories: ICategoryIdResp[];
    allVariants: IVariantResp[];
}

export interface ISubCategoryResp {
    id: string;
    name: IName;
    products: IProductResp[];
}

export interface ICategoryResp {
    id: string;
    name: IName;
    subcategories: ISubCategoryResp[];
}
