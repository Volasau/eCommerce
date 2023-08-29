import fetch from 'node-fetch';
import { constants } from '../../data/constants';
import { bearer_token_cc } from '../..';

export class QueryAllProducts {
    projectKey: string;
    productsEndpoint: string;
    constructor() {
        this.projectKey = constants.projectKey;
        this.productsEndpoint = `https://api.commercetools.com/${this.projectKey}/products?limit=60`;
    }

    async getAllProducts() {
        const response = await fetch(this.productsEndpoint, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${await bearer_token_cc}`,
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        return data.results;
    }
}
