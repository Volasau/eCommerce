interface ILastModifiedBy {
    clientId?: string;
    isPlatformClient: boolean;
    user?: IUser;
}

interface IUser {
    typeId: string;
    id: string;
}

interface IAddresses {
    id: string;
    streetName: string;
    postalCode: string;
    city: string;
    country: string;
}

interface ICreatedBy {
    clientId?: string;
    isPlatformClient: boolean;
    user?: IUser;
}

export interface ICustomerResponse {
    id: string;
    version: number;
    versionModifiedAt: string;
    lastMessageSequenceNumber: number;
    createdAt: string;
    lastModifiedAt: string;
    lastModifiedBy: ILastModifiedBy;
    createdBy: ICreatedBy;
    customerNumber?: string;
    dateOfBirth: string;
    email: string;
    firstName: string;
    lastName: string;
    middleName?: string;
    title?: string;
    salutation?: string;
    password: string;
    addresses: IAddresses[];
    defaultShippingAddressId: string;
    defaultBillingAddressId: string;
    shippingAddressIds: string[];
    billingAddressIds: string[];
    isEmailVerified: false;
    stores: [];
    authenticationMode: string;
}
