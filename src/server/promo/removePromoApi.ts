import { constants } from '../../data/constants';
import { Cart } from '@commercetools/platform-sdk';
import { request } from '../classes/requestClass';
import { PARSE } from '../interfaces/parseEnum';
import { getCartManager } from '../cart/getCartById';

export class RemovePromo {
    private apiUrl: string;
    private accessToken: string;
    private cartVersion: number;

    constructor(cartId: string, cartVersion: number) {
        this.cartVersion = cartVersion;
        this.apiUrl = `${constants.apiUrl}/carts/${cartId}/`;
        this.accessToken = sessionStorage.getItem('anonymousToken') as string;
    }

    async removePromoFromCart(cart: Cart): Promise<Cart | undefined> {
        this.accessToken = sessionStorage.getItem('anonymousToken') as string;
        const discountId = cart?.discountCodes[0].discountCode.id;
        try {
            const requestData = {
                version: this.cartVersion,
                actions: [
                    {
                        action: 'removeDiscountCode',
                        discountCode: {
                            typeId: 'discount-code',
                            id: discountId,
                        },
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
            console.error('Error with adding promo item');
        }
    }
}

export async function discardPromoFromCart(): Promise<Cart | undefined | void> {
    try {
        const cartId = sessionStorage.getItem('newCartId') as string;
        const getCart = (await getCartManager.getCartById(cartId as string)) as Cart;
        if (getCart?.discountCodes[0].discountCode.id) {
            const cart = new RemovePromo(getCart.id, getCart.version);
            const addPromoResp: Cart | undefined = await cart.removePromoFromCart(getCart);
            return addPromoResp;
        }
    } catch (error) {
        console.error(error);
    }
}