import { InnerForm } from '../../src/pages/logReg/formClasses/classForm';
import { getFormAddress } from '../../src/pages/profile/changeAddress/getFormAddress';

describe('getFormAddress function', () => {
    it('should return an object with a form and inner form elements', () => {
        const formAddress = getFormAddress();

        expect(formAddress).toHaveProperty('form');

        expect(formAddress.form instanceof HTMLFormElement).toBe(true);

        expect(formAddress).toHaveProperty('inners');

        expect(Array.isArray(formAddress.inners)).toBe(true);

        expect(formAddress.inners.length).toBe(4);

        formAddress.inners.forEach((inner) => {
            expect(inner instanceof InnerForm).toBe(true);
        });
    });
});
