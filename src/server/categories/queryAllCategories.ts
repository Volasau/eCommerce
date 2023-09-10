import fetch from 'node-fetch';
import { bearer_token_cc } from '../..';
import { ICategoryResponse } from '../function/interfaces';

export class QueryAllCategories {
    private readonly categoryEndpoint = 'https://api.commercetools.com/01082023';

    async getCategories(): Promise<ICategoryResponse[]> {
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
