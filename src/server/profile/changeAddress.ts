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
            console.log('Address removed:', res);
            return res;
        } catch (error) {
            console.error('Error creating billing address:', error);
            throw error;
        }
    }

    // async deletBillingAddress() {
    //     const requestData = {
    //         version: this.customerVersion,
    //         actions: [
    //             {
    //                 action: 'removeBillingAddressId',
    //                 addressId: this.addressId,
    //             },
    //         ],
    //     };

    //     const headers = {
    //         Authorization: `Bearer ${await bearer_token_cc}`,
    //         'Content-Type': 'application/json',
    //     };

    //     try {
    //         const response = await fetch(this.apiUrlCustomers + `/${this.customerId}`, {
    //             method: 'POST',
    //             headers: headers,
    //             body: JSON.stringify(requestData),
    //         });

    //         const billingAddress = await response.json();
    //         // this.billingAddressId = billingAddress.id;
    //         this.customerVersion = this.customerVersion + 1;
    //         console.log(this.customerVersion);
    //         console.log('Billing address created:', billingAddress);
    //         return billingAddress;
    //     } catch (error) {
    //         console.error('Error creating billing address:', error);
    //         throw error;
    //     }
    // }

    // async deletShippingAddress() {
    //     const requestData = {
    //         version: this.customerVersion,
    //         actions: [
    //             {
    //                 action: 'removeShippingAddressId',
    //                 addressId: this.addressId,
    //             },
    //         ],
    //     };

    //     const headers = {
    //         Authorization: `Bearer ${await bearer_token_cc}`,
    //         'Content-Type': 'application/json',
    //     };

    //     try {
    //         const response = await fetch(this.apiUrlCustomers + `/${this.customerId}`, {
    //             method: 'POST',
    //             headers: headers,
    //             body: JSON.stringify(requestData),
    //         });

    //         const shippingAddress = await response.json();
    //         // this.shippingAddressId = shippingAddress.id;
    //         this.customerVersion = this.customerVersion + 1;
    //         console.log(this.customerVersion);

    //         console.log('Shipping address created:', shippingAddress);
    //         return shippingAddress;
    //     } catch (error) {
    //         console.error('Error creating shipping address:', error);
    //         throw error;
    //     }
    // }

    // async createBillingAddress() {
    //     const requestData = {
    //         version: this.customerVersion,
    //         actions: [
    //             {
    //                 action: 'addBillingAddressId',
    //                 addressId: this.addressId,
    //             },
    //         ],
    //     };

    //     const headers = {
    //         Authorization: `Bearer ${await bearer_token_cc}`,
    //         'Content-Type': 'application/json',
    //     };

    //     try {
    //         const response = await fetch(this.apiUrlCustomers + `/${this.customerId}`, {
    //             method: 'POST',
    //             headers: headers,
    //             body: JSON.stringify(requestData),
    //         });

    //         const billingAddress = await response.json();
    //         // this.billingAddressId = billingAddress.id;
    //         this.customerVersion = this.customerVersion + 1;
    //         console.log(this.customerVersion);
    //         console.log('Billing address created:', billingAddress);
    //         return billingAddress;
    //     } catch (error) {
    //         console.error('Error creating billing address:', error);
    //         throw error;
    //     }
    // }

    // async createShippingAddress() {
    //     const requestData = {
    //         version: this.customerVersion,
    //         actions: [
    //             {
    //                 action: 'addShippingAddressId',
    //                 addressId: this.addressId,
    //             },
    //         ],
    //     };

    //     const headers = {
    //         Authorization: `Bearer ${await bearer_token_cc}`,
    //         'Content-Type': 'application/json',
    //     };

    //     try {
    //         const response = await fetch(this.apiUrlCustomers + `/${this.customerId}`, {
    //             method: 'POST',
    //             headers: headers,
    //             body: JSON.stringify(requestData),
    //         });

    //         const shippingAddress = await response.json();
    //         // this.shippingAddressId = shippingAddress.id;
    //         this.customerVersion = this.customerVersion + 1;
    //         console.log(this.customerVersion);

    //         console.log('Shipping address created:', shippingAddress);
    //         return shippingAddress;
    //     } catch (error) {
    //         console.error('Error creating shipping address:', error);
    //         throw error;
    //     }
    // }

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
            console.log(this.customerVersion);

            console.log('Default Billing address created:', defaultBillingAddress);
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
            console.log(this.customerVersion);

            console.log('Default Billing address created:', defaultShippingAddress);
            return defaultShippingAddress;
        } catch (error) {
            console.error('Error creating billing address:', error);
            throw error;
        }
    }
}
