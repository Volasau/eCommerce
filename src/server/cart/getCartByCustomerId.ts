import { Cart } from '@commercetools/platform-sdk';
import { bearer_token_pf } from '../../pages/logReg/validation/authorizationFunctions/logInToServer';
import { constants } from '../../data/constants';

class CartByCustomerId {
    async getCartsByCustomerId(customerId: string): Promise<Cart> {
        const response: Response = await fetch(`${constants.apiUrlCarts}/customer-id=${customerId}`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${bearer_token_pf}`,
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error(`Failed to fetch customer carts: ${response.statusText}`);
        }

        const data: Cart = await response.json();
        return data;
    }
}

export const cartByCustomerId = new CartByCustomerId();
