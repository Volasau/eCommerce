import { constants } from '../../data/constants';
import { request } from '../classes/requestClass';
import { PARSE } from '../interfaces/parseEnum';
import { ICart } from '../function/interfaces';
// import { AddLineItem } from './addLineItem';

export class CartCreateManager {
    private currency: string;
    private bearerTokenAs: string;

    constructor() {
        this.currency = 'GBP';
        this.bearerTokenAs = localStorage.getItem('anonymousToken') as string;
    }

    async createCart(): Promise<ICart | undefined> {
        this.bearerTokenAs = localStorage.getItem('anonymousToken') as string;
        const requestData = {
            currency: this.currency,
        };
        try {
            const auth = `Bearer ${this.bearerTokenAs}`;
            const res: Response = await request.postAuth(
                constants.meCartEndpoint,
                auth,
                PARSE.Json,
                JSON.stringify(requestData)
            );

            const data: ICart = await res.json();
            return data;
        } catch (error) {
            if (error === '400') {
                console.error('Неверный логин или пароль');
            }
        }
    }
}

export async function createCart(): Promise<void> {
    const cartManager = new CartCreateManager();
    const cartResponse = (await cartManager.createCart()) as ICart;
    localStorage.setItem('newCartId', cartResponse.id);
    return;
}
