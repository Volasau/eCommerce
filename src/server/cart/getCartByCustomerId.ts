import { Cart } from '@commercetools/platform-sdk';
import { constants } from '../../data/constants';
import { request } from '../classes/requestClass';

class CartByCustomerId {
    async getCartsByCustomerId(customerId: string): Promise<Cart> {
        const endpoint = `${constants.apiUrlCarts}/customer-id=${customerId}`;
        const response: Response = await request.getPassFlow(endpoint);
        if (!response.ok) {
            throw new Error(`Failed to fetch customer carts: ${response.statusText}`);
        }

        const data: Cart = await response.json();
        return data;
    }
}

export const cartByCustomerId = new CartByCustomerId();
