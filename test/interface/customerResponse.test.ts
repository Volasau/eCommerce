import { ICustomerResponse } from '../../src/core/interfaces/customerResponse';

describe('Customer Response Interface', () => {
    it('should have the required properties and types', () => {
        const customerResponse: ICustomerResponse = {
            id: '1',
            version: 1,
            versionModifiedAt: 'string',
            lastMessageSequenceNumber: 1,
            createdAt: 'string',
            lastModifiedAt: 'string',
            lastModifiedBy: {
                isPlatformClient: true,
                user: {
                    typeId: '1',
                    id: '1',
                },
            },
            createdBy: {
                isPlatformClient: true,
                user: {
                    typeId: '1',
                    id: '1',
                },
            },
            dateOfBirth: '1990-01-01',
            email: 'qqq@www.com',
            firstName: 'Ryhor',
            lastName: 'Volas',
            middleName: 'string',
            title: 'Yes',
            salutation: 'Hello',
            password: 'qwer123',
            addresses: [
                {
                    id: '1',
                    streetName: 'Pushkin',
                    postalCode: '12345',
                    city: 'Batumi',
                    country: 'USA',
                },
            ],
            defaultShippingAddressId: '1',
            defaultBillingAddressId: '1',
            shippingAddressIds: ['1'],
            billingAddressIds: ['1'],
            isEmailVerified: false,
            stores: [],
            authenticationMode: 'email',
        };

        expect(customerResponse).toBeDefined();
        expect(typeof customerResponse.id).toBe('string');
        expect(typeof customerResponse.version).toBe('number');
        expect(typeof customerResponse.versionModifiedAt).toBe('string');
        expect(typeof customerResponse.lastMessageSequenceNumber).toBe('number');
        expect(typeof customerResponse.createdAt).toBe('string');
        expect(typeof customerResponse.lastModifiedAt).toBe('string');
        expect(customerResponse.lastModifiedBy).toBeDefined();
        expect(typeof customerResponse.lastModifiedBy.isPlatformClient).toBe('boolean');
        expect(customerResponse.lastModifiedBy?.user).toBeDefined();
        if (customerResponse.lastModifiedBy?.user) {
            expect(typeof customerResponse.lastModifiedBy.user.typeId).toBe('string');
            expect(typeof customerResponse.lastModifiedBy.user.id).toBe('string');
        }
        expect(customerResponse.createdBy).toBeDefined();
        expect(typeof customerResponse.createdBy.isPlatformClient).toBe('boolean');
        expect(customerResponse.createdBy?.user).toBeDefined();
        if (customerResponse.createdBy?.user) {
            expect(typeof customerResponse.createdBy.user.typeId).toBe('string');
            expect(typeof customerResponse.createdBy.user.id).toBe('string');
        }
        expect(typeof customerResponse.dateOfBirth).toBe('string');
        expect(typeof customerResponse.email).toBe('string');
        expect(typeof customerResponse.firstName).toBe('string');
        expect(typeof customerResponse.lastName).toBe('string');
        expect(typeof customerResponse.middleName).toBe('string');
        expect(typeof customerResponse.title).toBe('string');
        expect(typeof customerResponse.salutation).toBe('string');
        expect(typeof customerResponse.password).toBe('string');
        expect(customerResponse.addresses).toBeDefined();
        expect(Array.isArray(customerResponse.addresses)).toBe(true);
        expect(customerResponse.defaultShippingAddressId).toBeDefined();
        expect(typeof customerResponse.defaultShippingAddressId).toBe('string');
        expect(customerResponse.defaultBillingAddressId).toBeDefined();
        expect(typeof customerResponse.defaultBillingAddressId).toBe('string');
        expect(Array.isArray(customerResponse.shippingAddressIds)).toBe(true);
        expect(Array.isArray(customerResponse.billingAddressIds)).toBe(true);
        expect(typeof customerResponse.isEmailVerified).toBe('boolean');
        expect(customerResponse.stores).toBeDefined();
        expect(Array.isArray(customerResponse.stores)).toBe(true);
        expect(typeof customerResponse.authenticationMode).toBe('string');
    });
});
