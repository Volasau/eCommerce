import { bearer_token_cc } from '../..';
import { constants } from '../../data/constants';
import { request } from '../classes/requestClass';
import { PARSE } from '../interfaces/parseEnum';

export class ChangeCustomerAddAddress {
    private customerVersion: number;

    private customerId: string;

    protected addressId: string;

    constructor(customerVersion: number, addressId: string, customerId: string) {
        this.customerVersion = customerVersion;
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

        try {
            const url = `${constants.apiUrlCustomers}/${this.customerId}`;
            const auth = `Bearer ${await bearer_token_cc}`;
            const res = await request.postAuth(url, auth, PARSE.Json, JSON.stringify(requestData));
            const response = await res.json();
            this.customerVersion = this.customerVersion + 1;
            return response;
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

        try {
            const url = `${constants.apiUrlCustomers}/${this.customerId}`;
            const auth = `Bearer ${await bearer_token_cc}`;
            const res = await request.postAuth(url, auth, PARSE.Json, JSON.stringify(requestData));

            const defaultBillingAddress = await res.json();
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

        try {
            const url = `${constants.apiUrlCustomers}/${this.customerId}`;
            const auth = `Bearer ${await bearer_token_cc}`;
            const res = await request.postAuth(url, auth, PARSE.Json, JSON.stringify(requestData));

            const defaultShippingAddress = await res.json();
            this.customerVersion = this.customerVersion + 1;

            return defaultShippingAddress;
        } catch (error) {
            console.error('Error creating billing address:', error);
            throw error;
        }
    }
}
