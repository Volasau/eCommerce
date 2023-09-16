import { constants } from '../../data/constants';
import { Cart, LineItem } from '@commercetools/platform-sdk';
import { request } from '../classes/requestClass';
import { PARSE } from '../interfaces/parseEnum';
import { getCartManager } from './getCartById';

export class RemoveLineItem {
    private apiUrl: string;
    private accessToken: string;
    private cartVersion: number;

    constructor(cartId: string, cartVersion: number) {
        this.cartVersion = cartVersion;
        this.apiUrl = `${constants.apiUrl}/carts/${cartId}/`;
        this.accessToken = localStorage.getItem('anonymousToken') as string;
    }

    async removeFromCart(lineItemId: string): Promise<Cart | undefined> {
        this.accessToken = localStorage.getItem('anonymousToken') as string;
        try {
            const requestData = {
                version: this.cartVersion,
                actions: [
                    {
                        action: 'removeLineItem',
                        lineItemId,
                        quantity: 1,
                    },
                ],
            };
            console.log(this.accessToken);
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

export async function removeItemFromCart(productIdToFind: string): Promise<Cart | undefined> {
    try {
        const cartId = localStorage.getItem('newCartId') as string;
        const getCart = (await getCartManager.getCartById(cartId as string)) as Cart;
        const matchingLineItem: LineItem | undefined = getCart.lineItems.find(
            (lineItem) => lineItem.productId === productIdToFind
        );
        let lineItemId = '';
        if (matchingLineItem) {
            lineItemId = matchingLineItem.id;
        }
        const cart = new RemoveLineItem(getCart.id, getCart.version);
        console.log(cart);
        const removeLineItemResp: Cart | undefined = await cart.removeFromCart(lineItemId);
        return removeLineItemResp;
    } catch (error) {
        console.error(error);
    }
}
