import fetch from 'node-fetch';
import { constants } from '../../data/constants';
import { bearer_token_cc } from '../..';

export class getCategoryById {
    projectKey: string;
    categoryEndpoint: string;
    constructor() {
        this.projectKey = constants.projectKey;
        this.categoryEndpoint = `https://api.commercetools.com/${this.projectKey}`;
    }

    async getCategoryById(categoryId: string) {
        try {
            const response = await fetch(`${this.categoryEndpoint}/categories/${categoryId}`, {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${await bearer_token_cc}`,
                    'Content-Type': 'application/json',
                },
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const category = await response.json();
            return category;
        } catch (error) {
            console.error('Error:', error);
            throw error;
        }
    }
}
