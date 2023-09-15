import { constants } from '../../data/constants';

export class CartGetManager {
    private bearerTokenAs: string;

    constructor() {
        this.bearerTokenAs = localStorage.getItem('anonymousToken') as string;
    }

    async getCartById(cartId: string) {
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

            const data = await response.json();
            console.log(data);
            return data;
        } catch (error) {
            console.error('Error:', error);
        }
    }
}

export const getCartManager = new CartGetManager();
