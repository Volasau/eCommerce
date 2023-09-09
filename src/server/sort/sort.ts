import fetch from 'node-fetch';
import { constants } from '../../data/constants';
import { bearer_token_cc } from '../..';

export class ProductSort {
    projectKey: string;
    baseURL: string;
    priceSort: string;
    nameSort: string;

    constructor() {
        this.projectKey = constants.projectKey;
        this.baseURL = `https://api.europe-west1.gcp.commercetools.com/${this.projectKey}/product-projections/search?`;
        this.priceSort = `price asc`;
        this.nameSort = `name.en asc`;
    }

    async sortByPrice() {
        try {
            const fullUrl = `${this.baseURL}sort=${encodeURIComponent(this.priceSort)}&limit=60`;
            const response = await fetch(fullUrl, {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${await bearer_token_cc}`,
                    'Content-Type': 'application/json',
                },
            });
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error:', error);
            throw error;
        }
    }

    async sortByName() {
        try {
            const fullUrl = `${this.baseURL}sort=${encodeURIComponent(this.nameSort)}&limit=60`;
            const response = await fetch(fullUrl, {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${await bearer_token_cc}`,
                    'Content-Type': 'application/json',
                },
            });
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error:', error);
            throw error;
        }
    }
}
