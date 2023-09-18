import { IRegistration } from '../../src/core/interfaces/registrationInterface';

const testRegistration: IRegistration = {
    email: 'string',
    password: 'string',
    name: 'string',
    lastName: 'string',
    country: 'string',
    city: 'string',
    street: 'string',
    postcode: 'string',
    birthDate: 'string',
    countryShip: 'string',
    cityShip: 'string',
    streetShip: 'string',
    postcodeShip: 'string',
    billingDefault: false,
    shippingDefault: true,
};

describe('IAboutDescription Interface', () => {
    it('should have a email property of type string', () => {
        expect(typeof testRegistration.email).toBe('string');
    });

    it('should have a password property of type string', () => {
        expect(typeof testRegistration.password).toBe('string');
    });

    it('should have a name property of type string', () => {
        expect(typeof testRegistration.name).toBe('string');
    });

    it('should have a lastName property of type string', () => {
        expect(typeof testRegistration.lastName).toBe('string');
    });
    it('should have a country property of type string', () => {
        expect(typeof testRegistration.country).toBe('string');
    });

    it('should have a city property of type string', () => {
        expect(typeof testRegistration.city).toBe('string');
    });

    it('should have a street property of type string', () => {
        expect(typeof testRegistration.street).toBe('string');
    });
    it('should have a postcode property of type string', () => {
        expect(typeof testRegistration.postcode).toBe('string');
    });

    it('should have a birthDate property of type string', () => {
        expect(typeof testRegistration.birthDate).toBe('string');
    });

    it('should have a countryShip property of type string', () => {
        expect(typeof testRegistration.countryShip).toBe('string');
    });
    it('should have a cityShip property of type string', () => {
        expect(typeof testRegistration.cityShip).toBe('string');
    });

    it('should have a streetShip property of type string', () => {
        expect(typeof testRegistration.streetShip).toBe('string');
    });

    it('should have a postcodeShip property of type string', () => {
        expect(typeof testRegistration.postcodeShip).toBe('string');
    });
    it('should not allow billingDefault property of type boolean', () => {
        expect(typeof testRegistration.billingDefault).toBe('boolean');
    });
    it('should not allow shippingDefault property of type boolean', () => {
        expect(typeof testRegistration.shippingDefault).toBe('boolean');
    });
});
