import { ICreateCartRequest } from './createCartRequest.interfaces';
import { IAuthorization } from './authorization.interfaces';
import { IRegistration } from './registration.interfaces';
import { IProduct } from '../../server/products/queryProductProjections';

export interface IConstants {
    page: number;
    logIn: boolean;
    shipDefault: boolean;
    billDefault: boolean;
    baseURL: string;
    apiUrl: string;
    apiUrlCarts: string;
    apiUrlLogin: string;
    apiUrlCustomers: string;
    authHost: string;
    cartID: string;
    client_id: string;
    authHeader: string;
    authURL: string;
    tokenUrl: string;
    anonymousTokenUrl: string;
    revokeUrl: string;
    categoryEndpoint: string;
    productsEndpoint: string;
    meCartEndpoint: string;
    client_secret: string;
    projectKey: string;
    scope: string;
    requestDataCart: ICreateCartRequest;
    registration: IRegistration;
    authorization: IAuthorization;
    modalPage: number;
    modalImages: string[];
    productList: IProduct[];
}
