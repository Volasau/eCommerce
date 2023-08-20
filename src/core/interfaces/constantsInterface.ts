import { ICreateCartRequest } from './CreateCartRequest';

export interface IConstants {
    shipDefault: boolean;
    billDefault: boolean;
    apiUrlCarts: string;
    apiUrlLogin: string;
    bearerToken: string;
    cartID: string;
    requestDataCart: ICreateCartRequest;
}
