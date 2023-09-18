import { IAddressBilling } from '../../src/core/interfaces/addressBilling';

const testAddressBilling: IAddressBilling = {
    streetName: 'Pushkin',
    city: 'Gomel',
    postCode: '6600',
    country: 'Belarus',
    billingDefault: true,
};

describe('IAboutDescription Interface', () => {
    it('should have a streetName property of type string', () => {
        expect(typeof testAddressBilling.streetName).toBe('string');
    });

    it('should have a city property of type string', () => {
        expect(typeof testAddressBilling.city).toBe('string');
    });

    it('should have a postCode property of type string', () => {
        expect(typeof testAddressBilling.postCode).toBe('string');
    });

    it('should have a country property of type string', () => {
        expect(typeof testAddressBilling.country).toBe('string');
    });
    it('should not allow billingDefault to be a number', () => {
        expect(typeof testAddressBilling.billingDefault).toBe('boolean');
    });
    it('should not allow billingDefault to be a string', () => {
        expect(typeof testAddressBilling.billingDefault).not.toBe('string');
    });
});
