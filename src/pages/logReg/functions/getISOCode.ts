import { ICountryObj } from '../../../core/interfaces/countryObjInterface';
import { countries } from '../../../data/country';

export async function getISOCodeByCountryName(countryName: string) {
    const countryData = countries.find((country) => country.Country === countryName) as ICountryObj;
    return countryData ? countryData.ISO : 'Country not found';
}
