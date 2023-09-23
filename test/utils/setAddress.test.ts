import { setAddressTitle } from '../../src/pages/profile/setAddressTittle';

describe('setAddressTitle function', () => {
    it('should return the correct title when both isBill and isShip are true', () => {
        const isBill = true;
        const isShip = true;
        const addWord = 'NEW ';
        const title = setAddressTitle(isBill, isShip, addWord);
        expect(title).toBe('NEW BILLING and SHIPPING ADDRESS');
    });

    it('should return the correct title when only isBill is true', () => {
        const isBill = true;
        const isShip = false;
        const addWord = 'NEW ';
        const title = setAddressTitle(isBill, isShip, addWord);
        expect(title).toBe('NEW BILLING ADDRESS');
    });

    it('should return the correct title when only isShip is true', () => {
        const isBill = false;
        const isShip = true;
        const addWord = 'NEW ';
        const title = setAddressTitle(isBill, isShip, addWord);
        expect(title).toBe('NEW SHIPPING ADDRESS');
    });

    it('should return an empty string when both isBill and isShip are false', () => {
        const isBill = false;
        const isShip = false;
        const addWord = 'NEW ';
        const title = setAddressTitle(isBill, isShip, addWord);
        expect(title).toBe('');
    });
});
