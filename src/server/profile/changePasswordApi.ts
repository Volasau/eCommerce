import fetch from 'node-fetch';
import { bearer_token_cc } from '../..';
import { constants } from '../../data/constants';

export class changeCustomerPassword {
    private apiUrlCustomers: string;
    private customerVersion: number;

    constructor() {
        this.customerVersion = 0;
        this.apiUrlCustomers = constants.apiUrlCustomers;
    }
    async changePasword(passwordOld: string, passwordNew: string, customerVersion: number, customerId: string) {
        const requestData = {
            id: customerId,
            version: customerVersion,
            currentPassword: passwordOld,
            newPassword: passwordNew,
        };

        const headers = {
            Authorization: `Bearer ${await bearer_token_cc}`,
            'Content-Type': 'application/json',
        };

        try {
            const response = await fetch(this.apiUrlCustomers + `/password`, {
                method: 'POST',
                headers: headers,
                body: JSON.stringify(requestData),
            });
            const res = await response.json();
            this.customerVersion = this.customerVersion + 1;
            console.log('Address removed:', res);
            return res;
        } catch (error) {
            console.error('Error creating billing address:', error);
            throw error;
        }
    }
}
