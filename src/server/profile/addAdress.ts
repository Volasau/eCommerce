import fetch from 'node-fetch';
import { bearer_token_cc } from '../..';
import { constants } from '../../data/constants';

export class CustomerAddAdress {
    private apiUrlCustomers: string;
    private customerVersion: number;
    protected addressId: string;

    constructor(customerVersion: number) {
        this.customerVersion = customerVersion;
        this.apiUrlCustomers = constants.apiUrlCustomers;
        this.addressId = '';
    }
    async addAddress(country: string, city: string, street: string, postalCode: string, customerId: string) {
        const requestData = {
            version: this.customerVersion,
            actions: [
                {
                    action: 'addAddress',
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
            const response = await fetch(this.apiUrlCustomers + `/${customerId}`, {
                method: 'POST',
                headers: headers,
                body: JSON.stringify(requestData),
            });
            const res = await response.json();
            const index: number = res.addresses.length - 1;

            if (res.addresses && res.addresses.length > index) {
                this.addressId = res.addresses[index].id;
            }
            this.customerVersion = this.customerVersion + 1;
            return res;
        } catch (error) {
            console.error('Error creating billing address:', error);
            throw error;
        }
    }

    async createBillingAddress(customerId: string) {
        const requestData = {
            version: this.customerVersion,
            actions: [
                {
                    action: 'addBillingAddressId',
                    addressId: this.addressId,
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

            const billingAddress = await response.json();
            this.customerVersion = this.customerVersion + 1;
            return billingAddress;
        } catch (error) {
            console.error('Error creating billing address:', error);
            throw error;
        }
    }

    async createShippingAddress(customerId: string) {
        const requestData = {
            version: this.customerVersion,
            actions: [
                {
                    action: 'addShippingAddressId',
                    addressId: this.addressId,
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

            const shippingAddress = await response.json();
            this.customerVersion = this.customerVersion + 1;

            return shippingAddress;
        } catch (error) {
            console.error('Error creating shipping address:', error);
            throw error;
        }
    }

    async setDefaultBillingAddress(customerId: string) {
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
            const response = await fetch(this.apiUrlCustomers + `/${customerId}`, {
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

    async setDefaultShippingAddress(customerId: string) {
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
            const response = await fetch(this.apiUrlCustomers + `/${customerId}`, {
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
