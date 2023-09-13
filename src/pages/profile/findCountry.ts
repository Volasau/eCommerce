import { countries } from '../../data/country';

export function findCountryNameByISO(isoCode: string): string {
    const countryData = countries.find((item) => item.ISO === isoCode);
    if (countryData) {
        return countryData.Country;
    }
    return 'Country not found';
}
