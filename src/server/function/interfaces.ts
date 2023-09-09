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

export interface ICategoryResponse {
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
