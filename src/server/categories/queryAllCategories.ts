import fetch from 'node-fetch';
import { constants } from '../../data/constants';
import { bearer_token_cc } from '../..';

export class QueryAllCategories {
    projectKey: string;
    categoryEndpoint: string;
    constructor() {
        this.projectKey = constants.projectKey;
        this.categoryEndpoint = `https://api.commercetools.com/${this.projectKey}`;
    }

    async getCategories() {
        const access_token = await bearer_token_cc;
        const response = await fetch(`${this.categoryEndpoint}/categories`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${access_token}`,
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

export const AllCategoriees = new QueryAllCategories();
