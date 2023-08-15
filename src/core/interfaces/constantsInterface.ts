import { ICreateCartRequest } from './CreateCartRequest';

export interface IConstants {
    apiUrlCarts: string;
    apiUrlLogin: string;
    bearerToken: string;
    cartID: string;
    requestDataCart: ICreateCartRequest;
}
