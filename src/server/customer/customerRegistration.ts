import { Customer } from '@commercetools/platform-sdk';
import { constants } from '../../data/constants';
import { request } from '../classes/requestClass';
import { PARSE } from '../interfaces/parseEnum';
import { ICustomerSignInResponse } from '../../core/interfaces/customerSignInResponse';

export class CustomerManager {
    private url: string;

    private auth: string;

    private email: string;

    private firstName: string;

    private lastName: string;

    private password: string;

    private customerId: string;

    private customerVersion: number;

    private addressId: string;

    protected billingAddressId: string;

    protected shippingAddressId: string;

    protected defaultBillingAddressId: string;

    protected defaultShippingAddressId: string;

    constructor(bearer: string, email: string, firstName: string, lastName: string, password: string) {
        this.auth = bearer;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
        this.password = password;
        this.customerId = '';
        this.customerVersion = 0;
        this.addressId = '';
        this.billingAddressId = '';
        this.shippingAddressId = '';
        this.defaultBillingAddressId = '';
        this.defaultShippingAddressId = '';
        this.url = '';
    }

    async createCustomer(): Promise<Customer> {
        const data = {
            email: this.email,
            firstName: this.firstName,
            lastName: this.lastName,
            password: this.password,
        };

        try {
            const res: Response = await request.postAuth(
                constants.apiUrlCustomers,
                this.auth,
                PARSE.Json,
                JSON.stringify(data)
            );

            const response: ICustomerSignInResponse = await res.json();
            const customer: Customer = response.customer;
            this.customerId = customer.id;
            this.url = `${constants.apiUrlCustomers}/${this.customerId}`;
            this.customerVersion = customer.version;
            return customer;
        } catch (error) {
            console.error('Error creating customer:', error);
            throw error;
        }
    }

    async createBirthDate(birthDate: string): Promise<Customer> {
        const requestData = {
            version: this.customerVersion,
            actions: [
                {
                    action: 'setDateOfBirth',
                    dateOfBirth: birthDate,
                },
            ],
        };

        try {
            const res: Response = await request.postAuth(this.url, this.auth, PARSE.Json, JSON.stringify(requestData));
            const response: Customer = await res.json();
            this.customerVersion = this.customerVersion + 1;
            return response;
        } catch (error) {
            console.error('Error creating billing address:', error);
            throw error;
        }
    }

    async createAddress(
        streetName: string,
        city: string,
        postalCode: string,
        country: string,
        index: number
    ): Promise<Customer | undefined> {
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

        try {
            const res: Response = await request.postAuth(this.url, this.auth, PARSE.Json, JSON.stringify(requestData));
            const response: Customer = await res.json();
            this.addressId = response.addresses[index].id as string;
            this.customerVersion = this.customerVersion + 1;
            return response;
        } catch (error) {
            console.error('Error creating billing address:', error);
            throw error;
        }
    }

    async createBillingAddress(): Promise<Customer> {
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
            const res: Response = await request.postAuth(this.url, this.auth, PARSE.Json, JSON.stringify(requestData));
            const billingAddress: Customer = await res.json();
            this.billingAddressId = billingAddress.id;
            this.customerVersion = this.customerVersion + 1;
            return billingAddress;
        } catch (error) {
            console.error('Error creating billing address:', error);
            throw error;
        }
    }

    async createShippingAddress(): Promise<Customer> {
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
            const res: Response = await request.postAuth(this.url, this.auth, PARSE.Json, JSON.stringify(requestData));
            const shippingAddress: Customer = await res.json();
            this.shippingAddressId = shippingAddress.id;
            this.customerVersion = this.customerVersion + 1;
            return shippingAddress;
        } catch (error) {
            console.error('Error creating shipping address:', error);
            throw error;
        }
    }

    async setDefaultBillingAddress(): Promise<Customer> {
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
            const res: Response = await request.postAuth(this.url, this.auth, PARSE.Json, JSON.stringify(requestData));
            const defaultBillingAddress: Customer = await res.json();
            this.defaultBillingAddressId = defaultBillingAddress.id;
            this.customerVersion = this.customerVersion + 1;
            return defaultBillingAddress;
        } catch (error) {
            console.error('Error creating billing address:', error);
            throw error;
        }
    }

    async setDefaultShippingAddress(): Promise<Customer> {
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
            const res: Response = await request.postAuth(this.url, this.auth, PARSE.Json, JSON.stringify(requestData));
            const defaultShippingAddress: Customer = await res.json();
            this.defaultShippingAddressId = defaultShippingAddress.id;
            this.customerVersion = this.customerVersion + 1;
            return defaultShippingAddress;
        } catch (error) {
            console.error('Error creating billing address:', error);
            throw error;
        }
    }
}
