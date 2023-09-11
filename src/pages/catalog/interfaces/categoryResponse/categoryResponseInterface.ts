import { IName, IUser } from '../../../../server/function/interfaces';
import { IProduct } from '../../../../server/products/queryProductProjections';

export interface ICatId {
    id: string;
    typeId?: string;
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
    fractionDigits: number;
    type: string;
}

export interface IDiscountResp {
    discount: IUser;
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

export interface ISubCategoryResp {
    id: string;
    name: IName;
    products: IProduct[];
}

export interface ICategoryResp {
    id: string;
    name: IName;
    subcategories: ISubCategoryResp[];
}
