import { ICountryProp } from '../../../core/interfaces/countryPropInterface';
import { countries } from '../../../data/country';

export async function getISOCodeByCountryName(countryName: string) {
    const countryData = countries.find((country) => country.Country === countryName) as ICountryProp;
    return countryData ? countryData.ISO : 'Country not found';
}
