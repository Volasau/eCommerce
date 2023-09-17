import { constants } from '../../data/constants';
import { Cart } from '../../pages/basket/interfaces/cartInterface';

export class CartGetManager {
    private bearerTokenAs: string;

    constructor() {
        this.bearerTokenAs = sessionStorage.getItem('anonymousToken') as string;
    }

    async getCartById(cartId: string): Promise<Cart | undefined> {
        this.bearerTokenAs = sessionStorage.getItem('anonymousToken') as string;
        const fullUrl = `${constants.apiUrl}/carts/${cartId}`;
        try {
            const response: Response = await fetch(fullUrl, {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${this.bearerTokenAs}`,
                },
            });

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
