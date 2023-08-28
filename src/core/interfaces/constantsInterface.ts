import { IProduct } from '../../pages/catalog/interfaces/productInterface';
import { ICreateCartRequest } from './CreateCartRequest';
import { IAuthorisObj } from './aythorisObjInterface';
import { IRegObj } from './regObjInterface';

export interface IConstants {
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
    regObj: IRegObj;
    autorisObj: IAuthorisObj;
    modalPage: number;
    modalImages: string[];
    productList: IProduct[];
}
