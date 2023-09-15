import { constants } from '../../data/constants';
import { request } from '../classes/requestClass';
import { PARSE } from '../interfaces/parseEnum';
import { ICart } from '../function/interfaces';
import { AddLineItem } from './addLineItem';

export class CartCreateManager {
    private currency: string;
    private bearerTokenAs: string;

    constructor() {
        this.currency = 'GBP';
        this.bearerTokenAs = localStorage.getItem('anonymousToken') as string;
    }

    async createCart() {
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
            console.log(data);
            const cartId: string = data.id;
            console.log('Inside cartId', cartId);
            const cart = new AddLineItem(cartId);
            console.log('Inside cart', cart);
            const addLineItemResp = await cart.addToCart();
            let cartVersion = data.version;
            cartVersion += 1;
            console.log('Inside cartversion', cartVersion);
            console.log('Inside addline', addLineItemResp);
            return data;
        } catch (error) {
            if (error === '400') {
                console.error('Неверный логин или пароль');
            }
        }
    }
}
