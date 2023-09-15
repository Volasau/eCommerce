import { ILastModifiedBy } from '../../core/interfaces/customerResponse';
import { IPriceValueResp } from '../../pages/catalog/interfaces/categoryResponse/categoryResponseInterface';

export interface IUser {
    typeId: string;
    id: string;
}

export interface ICreatedBy {
    isPlatformClient: boolean;
    user: IUser;
}

export interface IName {
    en: string;
}

export interface ICategoryResponseResult {
    id: string;
    version: number;
    versionModifiedAt: string;
    lastMessageSequenceNumber: number;
    createdAt: string;
    lastModifiedAt: string;
    lastModifiedBy: ICreatedBy;
    createdBy: ICreatedBy;
    key: string;
    name: IName;
    slug: IName;
    description: IName;
    ancestors: IUser[];
    parent: IUser | null;
    orderHint: string;
    metaTitle: IName;
    metaDescription: IName;
    assets: [];
}

export interface ICategoryResponse {
    limit: number;
    offset: number;
    count: number;
    total: number;
    results: ICategoryResponseResult[];
}

export interface ICart {
    type: string;
    id: string;
    version: number;
    versionModifiedAt: string;
    lastMessageSequenceNumber: number;
    createdAt: string;
    lastModifiedAt: string;
    lastModifiedBy: ILastModifiedBy;
    createdBy: ILastModifiedBy;
    anonymousId: string;
    lineItems: [];
    cartState: string;
    totalPrice: IPriceValueResp;
    shippingMode: string;
    shipping: [];
    customLineItems: [];
    discountCodes: [];
    directDiscounts: [];
    inventoryMode: string;
    taxMode: string;
    taxRoundingMode: string;
    taxCalculationMode: string;
    deleteDaysAfterLastModification: number;
    refusedGifts: [];
    origin: string;
    itemShippingAddresses: [];
}
