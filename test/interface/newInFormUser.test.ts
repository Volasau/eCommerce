import { INewInformUser } from '../../src/pages/profile/interfaces/newInFormUser.interfaces';

const testNewInformUser: INewInformUser = {
    email: 'ryhor@gmail.com',
    firstName: 'Ryhor',
    lastName: 'Volasau',
    birthDate: '1990-01-01',
};

describe('IAboutDescription Interface', () => {
    it('should have a email property of type string', () => {
        expect(typeof testNewInformUser.email).toBe('string');
    });

    it('should have a firstName property of type string', () => {
        expect(typeof testNewInformUser.firstName).toBe('string');
    });

    it('should have a lastName property of type string', () => {
        expect(typeof testNewInformUser.lastName).toBe('string');
    });

    it('should have a birthDate property of type string', () => {
        expect(typeof testNewInformUser.birthDate).toBe('string');
    });
    it('should not allow email to be a number', () => {
        expect(typeof testNewInformUser.email).not.toBe('number');
    });
    it('should not allow birthDate to be a boolean', () => {
        expect(typeof testNewInformUser.birthDate).not.toBe('boolean');
    });
});
