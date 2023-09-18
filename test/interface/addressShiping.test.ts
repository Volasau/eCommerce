import { IAddressShipping } from '../../src/core/interfaces/addressShipping';

const testAddressShiping: IAddressShipping = {
    streetName: 'Pushkin',
    city: 'Gomel',
    postCode: '6600',
    country: 'Belarus',
    shippingDefault: true,
};

describe('IAboutDescription Interface', () => {
    it('should have a streetName property of type string', () => {
        expect(typeof testAddressShiping.streetName).toBe('string');
    });

    it('should have a city property of type string', () => {
        expect(typeof testAddressShiping.city).toBe('string');
    });

    it('should have a postCode property of type string', () => {
        expect(typeof testAddressShiping.postCode).toBe('string');
    });

    it('should have a country property of type string', () => {
        expect(typeof testAddressShiping.country).toBe('string');
    });
    it('should not allow shippingDefault to be a number', () => {
        expect(typeof testAddressShiping.shippingDefault).toBe('boolean');
    });
    it('should not allow shippingDefault to be a string', () => {
        expect(typeof testAddressShiping.shippingDefault).not.toBe('string');
    });
});
