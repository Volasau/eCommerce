import { constants } from '../../data/constants';
import { Cart, LineItem } from '@commercetools/platform-sdk';
import { request } from '../classes/requestClass';
import { PARSE } from '../interfaces/parseEnum';
import { getCartManager } from './getCartById';

export class ChangeLineItemQuantity {
    private apiUrl: string;
    private accessToken: string;
    private cartVersion: number;

    constructor(cartId: string, cartVersion: number) {
        this.cartVersion = cartVersion;
        this.apiUrl = `${constants.apiUrl}/carts/${cartId}/`;
        this.accessToken = sessionStorage.getItem('anonymousToken') as string;
    }

    async increaseInCart(lineItemId: string, amount: number): Promise<Cart | undefined> {
        this.accessToken = sessionStorage.getItem('anonymousToken') as string;
        try {
            amount += 1;
            const requestData = {
                version: this.cartVersion,
                actions: [
                    {
                        action: 'changeLineItemQuantity',
                        lineItemId,
                        quantity: amount,
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
            console.error('Error with removing line item');
        }
    }

    async decreaseInCart(lineItemId: string, amount: number): Promise<Cart | undefined> {
        this.accessToken = sessionStorage.getItem('anonymousToken') as string;
        try {
            amount -= 1;
            const requestData = {
                version: this.cartVersion,
                actions: [
                    {
                        action: 'changeLineItemQuantity',
                        lineItemId,
                        quantity: amount,
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
            console.error('Error with removing line item');
        }
    }
}

export async function increaseItemInBasket(itemId: string): Promise<Cart | undefined> {
    try {
        const cartId = sessionStorage.getItem('newCartId') as string;
        const getCart = (await getCartManager.getCartById(cartId as string)) as Cart;
        const matchingLineItem: LineItem | undefined = getCart.lineItems.find((lineItem) => lineItem.id === itemId);

        let lineItemId = '';
        if (matchingLineItem) {
            lineItemId = matchingLineItem.id;
        }
        const cart = new ChangeLineItemQuantity(getCart.id, getCart.version);
        const amount = matchingLineItem?.quantity as number;
        const removeLineItemResp: Cart | undefined = await cart.increaseInCart(lineItemId, amount);
        return removeLineItemResp;
    } catch (error) {
        console.error(error);
    }
}

export async function decreaseItemInBasket(itemId: string): Promise<Cart | undefined> {
    try {
        const cartId = sessionStorage.getItem('newCartId') as string;
        const getCart = (await getCartManager.getCartById(cartId as string)) as Cart;
        const matchingLineItem: LineItem | undefined = getCart.lineItems.find((lineItem) => lineItem.id === itemId);

        let lineItemId = '';
        if (matchingLineItem) {
            lineItemId = matchingLineItem.id;
        }
        const cart = new ChangeLineItemQuantity(getCart.id, getCart.version);
        const amount = matchingLineItem?.quantity as number;
        return await cart.decreaseInCart(lineItemId, amount);
    } catch (error) {
        console.error(error);
    }
}
