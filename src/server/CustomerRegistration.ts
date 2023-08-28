import fetch from 'node-fetch';
import { bearer_token_cc } from '..';
import { Customer } from '@commercetools/platform-sdk';

export class CustomerManager {
    private apiUrlCustomers: string;
    private email: string;
    private firstName: string;
    private lastName: string;
    private password: string;
    private customerId: string;
    private customerVersion: number;
    private addressId: string;
    protected billingAddressId: null;
    protected shippingAddressId: null;
    protected defaultBillingAddressId: string;
    protected defaultShippingAddressId: string;

    constructor(apiUrlCustomers: string, email: string, firstName: string, lastName: string, password: string) {
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
        this.password = password;
        this.customerId = '';
        this.customerVersion = 0;
        this.addressId = '';
        this.billingAddressId = null;
        this.shippingAddressId = null;
        this.apiUrlCustomers = apiUrlCustomers;
        this.defaultBillingAddressId = '';
        this.defaultShippingAddressId = '';
    }

    async createCustomer() {
        const newCustomer = {
            email: this.email,
            firstName: this.firstName,
            lastName: this.lastName,
            password: this.password,
        };

        const headers = {
            Authorization: `Bearer ${await bearer_token_cc}`,
            'Content-Type': 'application/json',
        };

        try {
            const response = await fetch(this.apiUrlCustomers, {
                method: 'POST',
                headers: headers,
                body: JSON.stringify(newCustomer),
            });

            const res = await response.json();
            const customer: Customer = res.customer;
            this.customerId = customer.id;
            this.customerVersion = customer.version;
            console.log('Customer created:', customer);
            return customer;
        } catch (error) {
            console.error('Error creating customer:', error);
            throw error;
        }
    }

    async createBirthDate(birthDate: string) {
        const requestData = {
            version: this.customerVersion,
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
            const response = await fetch(this.apiUrlCustomers + `/${this.customerId}`, {
                method: 'POST',
                headers: headers,
                body: JSON.stringify(requestData),
            });
            const res = await response.json();
            this.customerVersion = this.customerVersion + 1;
            console.log('Birthdate created:', res);
            return res;
        } catch (error) {
            console.error('Error creating billing address:', error);
            throw error;
        }
    }

    async createAddress(streetName: string, city: string, postalCode: string, country: string, index: number) {
        const requestData = {
            version: this.customerVersion,
            actions: [
                {
                    action: 'addAddress',
                    address: {
                        streetName: streetName,
                        city: city,
                        postalCode: postalCode,
                        country: country,
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
            this.addressId = res.addresses[index].id;
            this.customerVersion = this.customerVersion + 1;
            console.log('Address created:', res, this.addressId);
            return res;
        } catch (error) {
            console.error('Error creating billing address:', error);
            throw error;
        }
    }

    async createBillingAddress() {
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
            const response = await fetch(this.apiUrlCustomers + `/${this.customerId}`, {
                method: 'POST',
                headers: headers,
                body: JSON.stringify(requestData),
            });

            const billingAddress = await response.json();
            this.billingAddressId = billingAddress.id;
            this.customerVersion = this.customerVersion + 1;
            console.log('Billing address created:', billingAddress);
            return billingAddress;
        } catch (error) {
            console.error('Error creating billing address:', error);
            throw error;
        }
    }

    async createShippingAddress() {
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
            const response = await fetch(this.apiUrlCustomers + `/${this.customerId}`, {
                method: 'POST',
                headers: headers,
                body: JSON.stringify(requestData),
            });

            const shippingAddress = await response.json();
            this.shippingAddressId = shippingAddress.id;
            this.customerVersion = this.customerVersion + 1;
            console.log('Shipping address created:', shippingAddress);
            return shippingAddress;
        } catch (error) {
            console.error('Error creating shipping address:', error);
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
            this.defaultBillingAddressId = defaultBillingAddress.id;
            this.customerVersion = this.customerVersion + 1;
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
            this.defaultShippingAddressId = defaultShippingAddress.id;
            this.customerVersion = this.customerVersion + 1;
            console.log('Default Billing address created:', defaultShippingAddress);
            return defaultShippingAddress;
        } catch (error) {
            console.error('Error creating billing address:', error);
            throw error;
        }
    }
}
