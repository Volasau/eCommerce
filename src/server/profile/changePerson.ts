import { bearer_token_cc } from '../..';
import { constants } from '../../data/constants';
import { request } from '../classes/requestClass';
import { PARSE } from '../interfaces/parseEnum';

export class changeCustomerInfo {
    private addressId: string;
    private customerVersion: number;
    private auth: string;

    constructor() {
        this.customerVersion = 0;
        this.addressId = '';
        this.auth = '';
    }
    async changeLastName(lastName: string, customerVersion: number, customerId: string) {
        const requestData = {
            version: customerVersion,
            actions: [
                {
                    action: 'setLastName',
                    lastName: `${lastName}`,
                },
            ],
        };

        try {
            const url = `${constants.apiUrlCustomers}/${customerId}`;
            const res = await request.postAuth(url, this.auth, PARSE.Json, JSON.stringify(requestData));
            const response = await res.json();
            return response;
        } catch (error) {
            console.error('Error creating billing address:', error);
            throw error;
        }
    }

    async changeFistName(fistName: string, customerVersion: number, customerId: string) {
        const requestData = {
            version: customerVersion,
            actions: [
                {
                    action: 'setFirstName',
                    firstName: `${fistName}`,
                },
            ],
        };

        try {
            this.auth = `Bearer ${await bearer_token_cc}`;
            const url = `${constants.apiUrlCustomers}/${customerId}`;
            const res = await request.postAuth(url, this.auth, PARSE.Json, JSON.stringify(requestData));
            const response = await res.json();
            return response;
        } catch (error) {
            console.error('Error creating billing address:', error);
            throw error;
        }
    }

    async changeBirthDate(birthDate: string, customerVersion: number, customerId: string) {
        const requestData = {
            version: customerVersion,
            actions: [
                {
                    action: 'setDateOfBirth',
                    dateOfBirth: birthDate,
                },
            ],
        };

        try {
            const url = `${constants.apiUrlCustomers}/${customerId}`;
            const res = await request.postAuth(url, this.auth, PARSE.Json, JSON.stringify(requestData));
            const response = await res.json();
            return response;
        } catch (error) {
            console.error('Error creating billing address:', error);
            throw error;
        }
    }
    async changeEmail(email: string, customerVersion: number, customerId: string) {
        const requestData = {
            version: customerVersion,
            actions: [
                {
                    action: 'changeEmail',
                    email: `${email}`,
                },
            ],
        };

        try {
            const url = `${constants.apiUrlCustomers}/${customerId}`;
            const res = await request.postAuth(url, this.auth, PARSE.Json, JSON.stringify(requestData));
            const response = await res.json();
            return response;
        } catch (error) {
            console.error('Error creating billing address:', error);
            throw error;
        }
    }
}
