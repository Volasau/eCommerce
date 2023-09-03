export interface IUser {
    typeId: string;
    id: string;
}

export interface ILastModifiedBy {
    isPlatformClient: boolean;
    user: IUser;
}

export interface ICreatedBy {
    isPlatformClient: boolean;
    user: IUser;
}

export interface IName {
    en: string;
}

export interface ISlug {
    en: string;
}

export interface IDescription {
    en: string;
}

export interface IAncestors {
    typeId: string;
    id: string;
}

export interface IParent {
    typeId: string;
    id: string;
}

export interface IMetaTitle {
    en: string;
}

export interface IMetaDescription {
    en: string;
}

export interface ICategoryResponse {
    id: string;
    version: number;
    versionModifiedAt: string;
    lastMessageSequenceNumber: number;
    createdAt: string;
    lastModifiedAt: string;
    lastModifiedBy: ILastModifiedBy;
    createdBy: ICreatedBy;
    key: string;
    name: IName;
    slug: ISlug;
    description: IDescription;
    ancestors: IAncestors[];
    parent: IParent | null;
    orderHint: string;
    metaTitle: IMetaTitle;
    metaDescription: IMetaDescription;
    assets: [];
}
