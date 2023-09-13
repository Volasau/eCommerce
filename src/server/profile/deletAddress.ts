import { bearer_token_cc } from '../..';
import { constants } from '../../data/constants';
import { PARSE } from '../interfaces/parseEnum';
import { request } from '../classes/requestClass';

export class CustomerEditManager {
    private customerVersion: number;

    constructor() {
        this.customerVersion = 0;
    }
    async removeAddress(
        addressId: string,
        customerVersion: number,
        customerId: string
    ): Promise<Response | Error | void> {
        const requestData = {
            version: customerVersion,
            actions: [
                {
                    action: 'removeAddress',
                    addressId: `${addressId}`,
                },
            ],
        };

        try {
            const auth = `Bearer ${await bearer_token_cc}`;
            const url = `${constants.apiUrlCustomers}/${customerId}`;
            const res = await request.postAuth(url, auth, PARSE.Json, JSON.stringify(requestData));
            const response: Response = await res.json();
            this.customerVersion = this.customerVersion + 1;
            return response;
        } catch (error) {
            console.error('Error creating billing address:', error);
            throw error;
        }
    }
}
