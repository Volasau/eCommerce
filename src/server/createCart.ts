import fetch from 'node-fetch';
import { ICreateCartRequest } from '../core/interfaces/CreateCartRequest';
import { Cart } from '@commercetools/platform-sdk';

export class CartCreator {
    private apiUrlCarts: string;
    private bearerToken: string;

    constructor(apiUrlCarts: string, bearerToken: string) {
        this.apiUrlCarts = apiUrlCarts;
        this.bearerToken = bearerToken;
    }

    async createCart(requestDataCart: ICreateCartRequest): Promise<string> {
        try {
            const response = await fetch(this.apiUrlCarts, {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${this.bearerToken}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(requestDataCart),
            });

            if (!response.ok) {
                throw new Error(`Request failed with status: ${response.status}`);
            }

            const data: Cart = await response.json();
            console.log('Response:', data.id);
            return data.id;
        } catch (error) {
            console.error('Error:', error);
            throw error;
        }
    }
}
