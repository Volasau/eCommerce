import { constants } from '../../data/constants';
import { Cart, Product } from '@commercetools/platform-sdk';
import { getProductsId } from '../products/queryProductById';
import { request } from '../classes/requestClass';
import { PARSE } from '../interfaces/parseEnum';
import { getCartManager } from './getCartById';

export class AddLineItem {
    private apiUrl: string;
    private accessToken: string;
    private cartVersion: number;

    constructor(cartId: string, cartVersion: number) {
        this.cartVersion = cartVersion;
        this.apiUrl = `${constants.apiUrl}/carts/${cartId}/`;
        this.accessToken = localStorage.getItem('anonymousToken') as string;
    }

    async addToCart(productId: string): Promise<Cart | undefined> {
        this.accessToken = localStorage.getItem('anonymousToken') as string;
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
            const auth = `Bearer ${this.accessToken}`;
            const response: Response = await request.postAuth(
                this.apiUrl,
                auth,
                PARSE.Json,
                JSON.stringify(requestData)
            );

            if (!response.ok) {
                throw new Error(`Failed to add line item. Status: ${response.status}`);
            }

            const responseData: Cart = await response.json();

            this.cartVersion += 3;
            return responseData;
        } catch (error) {
            console.error('Error with adding line item');
        }
    }
}

export async function addItemToCart(productId: string): Promise<Cart | undefined> {
    try {
        const productBlock = (await getProductsId(productId)) as Product;
        const cartId = localStorage.getItem('newCartId') as string;
        const getCart = (await getCartManager.getCartById(cartId as string)) as Cart;
        let cartState: string = getCart.cartState;
        let cart: AddLineItem;
        if (cartState === 'Merged') {
            cartState = 'Active';
            cart = new AddLineItem(getCart.id, getCart.version);
        } else {
            cart = new AddLineItem(getCart.id, getCart.version);
        }

        const productIdForAdding: string = productBlock.id;
        const addLineItemResp: Cart | undefined = await cart.addToCart(productIdForAdding);
        return addLineItemResp;
    } catch (error) {
        console.error(error);
    }
}
