import { bearer_token_cc } from '../..';
import { ICustomerResponse } from '../../core/interfaces/customerResponse.interfaces';
import { constants } from '../../data/constants';
import { request } from '../classes/requestClass';
import { PARSE } from '../interfaces/parseEnum';

export class CustomerAddAdress {
    private customerVersion: number;

    protected addressId: string;

    constructor(customerVersion: number) {
        this.customerVersion = customerVersion;
        this.addressId = '';
    }
    async addAddress(
        country: string,
        city: string,
        street: string,
        postalCode: string,
        customerId: string
    ): Promise<Response> {
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

        try {
            const url = `${constants.apiUrlCustomers}/${customerId}`;
            const auth = `Bearer ${await bearer_token_cc}`;
            const res: Response = await request.postAuth(url, auth, PARSE.Json, JSON.stringify(requestData));

            const response: ICustomerResponse = await res.json();
            const index: number = response.addresses.length - 1;

            if (response.addresses && response.addresses.length > index) {
                this.addressId = response.addresses[index].id;
            }
            this.customerVersion = this.customerVersion + 1;
            return res;
        } catch (error) {
            console.error('Error creating billing address:', error);
            throw error;
        }
    }

    async createBillingAddress(customerId: string): Promise<ICustomerResponse | Error | void> {
        const requestData = {
            version: this.customerVersion,
            actions: [
                {
                    action: 'addBillingAddressId',
                    addressId: this.addressId,
                },
            ],
        };

        try {
            const url = `${constants.apiUrlCustomers}/${customerId}`;
            const auth = `Bearer ${await bearer_token_cc}`;
            const res: Response = await request.postAuth(url, auth, PARSE.Json, JSON.stringify(requestData));

            const billingAddress: ICustomerResponse = await res.json();
            this.customerVersion = this.customerVersion + 1;
            return billingAddress;
        } catch (error) {
            console.error('Error creating billing address:', error);
            throw error;
        }
    }

    async createShippingAddress(customerId: string): Promise<ICustomerResponse | Error | void> {
        const requestData = {
            version: this.customerVersion,
            actions: [
                {
                    action: 'addShippingAddressId',
                    addressId: this.addressId,
                },
            ],
        };

        try {
            const url = `${constants.apiUrlCustomers}/${customerId}`;
            const auth = `Bearer ${await bearer_token_cc}`;
            const res = await request.postAuth(url, auth, PARSE.Json, JSON.stringify(requestData));

            const shippingAddress: ICustomerResponse = await res.json();
            this.customerVersion = this.customerVersion + 1;

            return shippingAddress;
        } catch (error) {
            console.error('Error creating shipping address:', error);
            throw error;
        }
    }

    async setDefaultBillingAddress(customerId: string): Promise<ICustomerResponse | Error | void> {
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
            const url = `${constants.apiUrlCustomers}/${customerId}`;
            const auth = `Bearer ${await bearer_token_cc}`;
            const res = await request.postAuth(url, auth, PARSE.Json, JSON.stringify(requestData));

            const defaultBillingAddress: ICustomerResponse = await res.json();
            this.customerVersion = this.customerVersion + 1;

            return defaultBillingAddress;
        } catch (error) {
            console.error('Error creating billing address:', error);
            throw error;
        }
    }

    async setDefaultShippingAddress(customerId: string): Promise<ICustomerResponse | Error | void> {
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
            const url = `${constants.apiUrlCustomers}/${customerId}`;
            const auth = `Bearer ${await bearer_token_cc}`;
            const res = await request.postAuth(url, auth, PARSE.Json, JSON.stringify(requestData));

            const defaultShippingAddress: ICustomerResponse = await res.json();
            this.customerVersion = this.customerVersion + 1;

            return defaultShippingAddress;
        } catch (error) {
            console.error('Error creating billing address:', error);
            throw error;
        }
    }
}
