import { DiscountCode, DiscountCodePagedQueryResponse } from '@commercetools/platform-sdk';
import { constants } from '../../data/constants';
import { tokenFetcher } from '../token/accessTokenFetcher';

export class PromoCodes {
    private baseUrl: string;

    constructor() {
        this.baseUrl = `${constants.apiUrl}/discount-codes`;
    }

    async getPromoCodes(): Promise<DiscountCode[] | void> {
        let results: DiscountCode[];
        try {
            const bearer_token_cc: string = await tokenFetcher.fetchAccessToken();
            const response = await fetch(this.baseUrl, {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${bearer_token_cc}`,
                    'Content-Type': 'application/json',
                },
            });
            const data: DiscountCodePagedQueryResponse = await response.json();
            results = data.results;
            return results;
        } catch (error) {
            console.error(error);
        }
    }
}
