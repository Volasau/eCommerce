import { constants } from '../../data/constants';
import { Cart } from '../../pages/basket/interfaces/cart.interfaces';
import { request } from '../classes/requestClass';

export class CartGetManager {
    async getCartById(cartId: string): Promise<Cart | undefined> {
        const endpoint = `${constants.apiUrl}/carts/${cartId}`;
        try {
            const response: Response = await request.getAnonymous(endpoint);

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data: Cart = await response.json();
            return data;
        } catch (error) {
            console.error('Error:', error);
        }
    }
}

export const getCartManager = new CartGetManager();
