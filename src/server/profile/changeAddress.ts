import fetch from 'node-fetch';
import { bearer_token_cc } from '../..';
import { constants } from '../../data/constants';

export class changeCustomerAddAdress {
    private apiUrlCustomers: string;
    private customerVersion: number;
    private customerId: string;
    protected addressId: string;

    constructor(customerVersion: number, addressId: string, customerId: string) {
        this.customerVersion = customerVersion;
        this.apiUrlCustomers = constants.apiUrlCustomers;
        this.addressId = addressId;
        this.customerId = customerId;
    }
    async changeAddress(country: string, city: string, street: string, postalCode: string) {
        const requestData = {
            version: this.customerVersion,
            actions: [
                {
                    action: 'changeAddress',
                    addressId: this.addressId,
                    address: {
                        streetName: `${street}`,
                        postalCode: `${postalCode}`,
                        city: `${city}`,
                        country: `${country}`,
                    },
                },
            ],
        };

        const headers = {
            Authorization: `Bearer ${await bearer_token_cc}`,
            'Content-Type': 'application/json',
        };

        try {
            const response = await fetch(this.apiUrlCustomers + `/${this.customerId}`, {
                method: 'POST',
                headers: headers,
                body: JSON.stringify(requestData),
            });
            const res = await response.json();
            this.customerVersion = this.customerVersion + 1;
            return res;
        } catch (error) {
            console.error('Error creating billing address:', error);
            throw error;
        }
    }

    async setDefaultBillingAddress() {
        const requestData = {
            version: this.customerVersion,
            actions: [
                {
                    action: 'setDefaultBillingAddress',
                    addressId: this.addressId,
                },
            ],
        };

        const headers = {
            Authorization: `Bearer ${await bearer_token_cc}`,
            'Content-Type': 'application/json',
        };

        try {
            const response = await fetch(this.apiUrlCustomers + `/${this.customerId}`, {
                method: 'POST',
                headers: headers,
                body: JSON.stringify(requestData),
            });

            const defaultBillingAddress = await response.json();
            this.customerVersion = this.customerVersion + 1;

            return defaultBillingAddress;
        } catch (error) {
            console.error('Error creating billing address:', error);
            throw error;
        }
    }

    async setDefaultShippingAddress() {
        const requestData = {
            version: this.customerVersion,
            actions: [
                {
                    action: 'setDefaultShippingAddress',
                    addressId: this.addressId,
                },
            ],
        };

        const headers = {
            Authorization: `Bearer ${await bearer_token_cc}`,
            'Content-Type': 'application/json',
        };

        try {
            const response = await fetch(this.apiUrlCustomers + `/${this.customerId}`, {
                method: 'POST',
                headers: headers,
                body: JSON.stringify(requestData),
            });

            const defaultShippingAddress = await response.json();
            this.customerVersion = this.customerVersion + 1;

            return defaultShippingAddress;
        } catch (error) {
            console.error('Error creating billing address:', error);
            throw error;
        }
    }
}
