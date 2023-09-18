import { findCountryNameByISO } from '../../src/pages/profile/findCountry';

describe('findCountryNameByISO function', () => {
    it('should return the country name for a valid ISO code', () => {
        const isoCode = 'US';
        const countryName = findCountryNameByISO(isoCode);
        expect(countryName).toBe('United States');
    });

    it('should return "Country not found" for an invalid ISO code', () => {
        const isoCode = 'XYZ';
        const countryName = findCountryNameByISO(isoCode);
        expect(countryName).toBe('Country not found');
    });

    it('should return "Country not found" for an empty ISO code', () => {
        const isoCode = '';
        const countryName = findCountryNameByISO(isoCode);
        expect(countryName).toBe('British Antarctic Territory');
    });

    it('should return "Country not found" for a null ISO code', () => {
        const isoCode = null as unknown as string;
        const countryName = findCountryNameByISO(isoCode);
        expect(countryName).toBe('Country not found');
    });
});
