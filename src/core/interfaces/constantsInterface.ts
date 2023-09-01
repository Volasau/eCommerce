import { IProductResp } from '../../pages/catalog/interfaces/categoryResponse/categoryResponseInterface';
import { ICreateCartRequest } from './createCartRequest';
import { IAuthorizationObject } from './authorizationObjectInterface';
import { IRegistrationObject } from './registrationObjectInterface';

export interface IConstants {
    logIn: boolean;
    shipDefault: boolean;
    billDefault: boolean;
    apiUrlCarts: string;
    apiUrlLogin: string;
    apiUrlCustomers: string;
    authHost: string;
    cartID: string;
    client_id: string;
    client_secret: string;
    projectKey: string;
    scope: string;
    requestDataCart: ICreateCartRequest;
    regObj: IRegistrationObject;
    authorizationObject: IAuthorizationObject;
    modalPage: number;
    modalImages: string[];
    productList: IProductResp[];
}
