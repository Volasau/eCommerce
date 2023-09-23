import { IAboutDescription } from '../../src/pages/aboutus/interface/deascription.interfaces';

const testAboutDescription: IAboutDescription = {
    introduction: 'introduction',
    paragraphOne: 'paragraphOne',
    paragraphTwo: 'paragraphTwo',
    paragraphThree: 'paragraphThree',
    conclusion: 'conclusion I am Superman',
};

describe('IAboutDescription Interface', () => {
    it('should have a introduction property of type string', () => {
        expect(typeof testAboutDescription.introduction).toBe('string');
    });

    it('should have a paragraphOne property of type string', () => {
        expect(typeof testAboutDescription.paragraphOne).toBe('string');
    });

    it('should have a paragraphTwo property of type string', () => {
        expect(typeof testAboutDescription.paragraphTwo).toBe('string');
    });

    it('should have a paragraphThree property of type string', () => {
        expect(typeof testAboutDescription.paragraphThree).toBe('string');
    });

    it('should have a conclusion property of type string', () => {
        expect(typeof testAboutDescription.conclusion).toBe('string');
    });
    it('should not allow introduction to be a number', () => {
        expect(typeof testAboutDescription.introduction).not.toBe('number');
    });
    it('should not allow paragraphTwo to be a number', () => {
        expect(typeof testAboutDescription.paragraphTwo).not.toBe('number');
    });
    it('should not allow conclusion to be a boolean', () => {
        expect(typeof testAboutDescription.conclusion).not.toBe('boolean');
    });
});
