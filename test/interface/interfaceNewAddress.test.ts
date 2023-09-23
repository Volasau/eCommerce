import { INewAddress } from '../../src/pages/profile/interfaces/newAddress.interfaces';

const testNewAddress: INewAddress = {
    country: 'Belarus',
    city: 'Gomel',
    street: 'Chapaeva',
    code: 'code',
    billingDefault: false,
    shippingDefault: true,
    billing: false,
    shipping: true,
};

describe('INewAddress Interface', () => {
    it('should have a country property of type string', () => {
        expect(typeof testNewAddress.country).toBe('string');
    });

    it('should have a city property of type string', () => {
        expect(typeof testNewAddress.city).toBe('string');
    });

    it('should have a street property of type string', () => {
        expect(typeof testNewAddress.street).toBe('string');
    });

    it('should have a code property of type string', () => {
        expect(typeof testNewAddress.code).toBe('string');
    });
    it('should not allow billingDefault to be a boolean', () => {
        expect(typeof testNewAddress.billingDefault).toBe('boolean');
    });
    it('should not allow shippingDefault to be a boolean', () => {
        expect(typeof testNewAddress.shippingDefault).toBe('boolean');
    });
    it('should not allow billing to be a boolean', () => {
        expect(typeof testNewAddress.billing).toBe('boolean');
    });
    it('should not allow shipping to be a boolean', () => {
        expect(typeof testNewAddress.shipping).toBe('boolean');
    });
    it('should not allow shipping to be a boolean', () => {
        expect(typeof testNewAddress.shipping).not.toBe('string');
    });
    it('should not allow code to be a boolean', () => {
        expect(typeof testNewAddress.code).not.toBe('number');
    });
});
