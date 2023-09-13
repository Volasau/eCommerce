import { bearer_token_cc } from '../..';
import { constants } from '../../data/constants';
import { request } from '../classes/requestClass';
import { PARSE } from '../interfaces/parseEnum';

export class changeCustomerPassword {
    private customerVersion: number;

    constructor() {
        this.customerVersion = 0;
    }
    async changePassword(
        passwordOld: string,
        passwordNew: string,
        customerVersion: number,
        customerId: string
    ): Promise<Response | Error | void> {
        const requestData = {
            id: customerId,
            version: customerVersion,
            currentPassword: passwordOld,
            newPassword: passwordNew,
        };

        try {
            const url = `${constants.apiUrlCustomers}/password`;
            const auth = `Bearer ${await bearer_token_cc}`;
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
