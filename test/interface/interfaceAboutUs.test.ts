import { IAboutInfo } from '../../src/pages/aboutus/interface/info.interfaces';

const testAboutInfo: IAboutInfo = {
    fistName: 'Ryhor',
    role: 'Azimovich',
    photo: 'Mikolay.jpg',
    linkGitHub: 'https://github.com/Vasy',
    description: 'I am Superman',
};

describe('IAboutInfo Interface', () => {
    it('should have a firstName property of type string', () => {
        expect(typeof testAboutInfo.fistName).toBe('string');
    });

    it('should have a role property of type string', () => {
        expect(typeof testAboutInfo.role).toBe('string');
    });

    it('should have a foto property of type string', () => {
        expect(typeof testAboutInfo.photo).toBe('string');
    });

    it('should have a linkgithub property of type string', () => {
        expect(typeof testAboutInfo.linkGitHub).toBe('string');
    });

    it('should have a description property of type string', () => {
        expect(typeof testAboutInfo.description).toBe('string');
    });
    it('should not allow firstName to be a number', () => {
        expect(typeof testAboutInfo.fistName).not.toBe('number');
    });
    it('should not allow role to be a boolean', () => {
        expect(typeof testAboutInfo.role).not.toBe('boolean');
    });
});
