// import { bearer_token_pf } from '../../pages/logReg/validation/authorizationFunctions/logInToServer';
import { constants } from '../../data/constants';
import { Product } from '@commercetools/platform-sdk';
import { getProductsId } from '../products/queryProductById';
import { request } from '../classes/requestClass';
import { PARSE } from '../interfaces/parseEnum';
import { getCartManager } from './getCartById';
// import { cartManager } from './createCart';
// import { ICart } from '../function/interfaces';
// import { bearerTokenAs } from '../..';

export class AddLineItem {
    private apiUrl: string;
    private accessToken: string;
    private cartVersion: number;

    constructor(cartId: string, cartVersion: number) {
        this.cartVersion = cartVersion;
        this.apiUrl = `${constants.apiUrl}/carts/${cartId}/`;
        this.accessToken = localStorage.getItem('anonymousToken') as string;
    }

    async addToCart(productId: string) {
        try {
            const requestData = {
                version: this.cartVersion,
                actions: [
                    {
                        action: 'addLineItem',
                        productId,
                        variantId: 1,
                        quantity: 1,
                    },
                ],
            };
            console.log(this.accessToken);
            const auth = `Bearer ${this.accessToken}`;
            const response = await request.postAuth(this.apiUrl, auth, PARSE.Json, JSON.stringify(requestData));

            if (!response.ok) {
                throw new Error(`Failed to add line item. Status: ${response.status}`);
            }

            const responseData = await response.json();

            this.cartVersion += 3;
            return responseData;
        } catch (error) {
            console.error('Error with adding line item');
        }
    }
}

export function addItemToCart() {
    document.addEventListener('click', async (event) => {
        const target = event.target as HTMLButtonElement;
        console.log(target);
        if (target.className === 'cart-but') {
            const productBlock: Product = await getProductsId();
            // const cartResponse = (await cartManager.createCart()) as ICart;
            const cartId = localStorage.getItem('newCartId');
            const getCart = await getCartManager.getCartById(cartId as string);
            const cart = new AddLineItem(getCart.id, getCart.version);
            console.log(cart);
            const productId: string = productBlock.id;
            const addLineItemResp = await cart.addToCart(productId);
            return addLineItemResp;
        }
    });
}
