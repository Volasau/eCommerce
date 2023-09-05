import fetch from 'node-fetch';
import { constants } from '../../data/constants';
import { bearer_token_cc } from '../..';

export class ProductSearchManager {
    projectKey: string;
    baseURL: string;
    constructor() {
        this.projectKey = constants.projectKey;
        this.baseURL = `https://api.europe-west1.gcp.commercetools.com/${this.projectKey}/product-projections/search`;
    }

    async searchProducts(query: string) {
        const fullUrl = `${this.baseURL}?fuzzy=true&limit=60&text.en=${encodeURIComponent(query)}`;
        const headers = {
            Authorization: `Bearer ${await bearer_token_cc}`,
        };

        try {
            const response = await fetch(fullUrl, {
                method: 'GET',
                headers: headers,
            });

            if (!response.ok) {
                throw new Error(`Error ${response.status}: ${response.statusText}`);
            }

            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error searching customers:', error);
            throw error;
        }
    }
}
