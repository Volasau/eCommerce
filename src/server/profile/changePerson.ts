import fetch from 'node-fetch';
import { bearer_token_cc } from '../..';
import { constants } from '../../data/constants';

export class changeCustomerInfo {
    private apiUrlCustomers: string;
    private addressId: string;
    private customerVersion: number;

    constructor() {
        this.customerVersion = 0;
        this.apiUrlCustomers = constants.apiUrlCustomers;
        this.addressId = '';
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

        const headers = {
            Authorization: `Bearer ${await bearer_token_cc}`,
            'Content-Type': 'application/json',
        };

        try {
            const response = await fetch(this.apiUrlCustomers + `/${customerId}`, {
                method: 'POST',
                headers: headers,
                body: JSON.stringify(requestData),
            });
            const res = await response.json();
            return res;
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

        const headers = {
            Authorization: `Bearer ${await bearer_token_cc}`,
            'Content-Type': 'application/json',
        };

        try {
            const response = await fetch(this.apiUrlCustomers + `/${customerId}`, {
                method: 'POST',
                headers: headers,
                body: JSON.stringify(requestData),
            });
            const res = await response.json();
            return res;
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

        const headers = {
            Authorization: `Bearer ${await bearer_token_cc}`,
            'Content-Type': 'application/json',
        };

        try {
            const response = await fetch(this.apiUrlCustomers + `/${customerId}`, {
                method: 'POST',
                headers: headers,
                body: JSON.stringify(requestData),
            });
            const res = await response.json();
            return res;
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

        const headers = {
            Authorization: `Bearer ${await bearer_token_cc}`,
            'Content-Type': 'application/json',
        };

        try {
            const response = await fetch(this.apiUrlCustomers + `/${customerId}`, {
                method: 'POST',
                headers: headers,
                body: JSON.stringify(requestData),
            });
            const res = await response.json();
            return res;
        } catch (error) {
            console.error('Error creating billing address:', error);
            throw error;
        }
    }
}
