import { checkCountryInput } from './checkCountryInput';
import { chooseCountry } from './chooseCountry';

export function checkCountry(target: HTMLInputElement, error: HTMLElement) {
    const countryId = target.id;
    const listId = target.id === 'country' ? 'country-list' : 'country-listShip';
    const codeId = target.id === 'country' ? 'postcode' : 'postcodeShip';
    checkCountryInput(target, error);
    chooseCountry(target, error, countryId, listId, codeId);
}
