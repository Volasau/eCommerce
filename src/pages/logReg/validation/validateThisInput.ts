import { checkCountryInput } from './validationFunction/checkCountryInput';
import { chooseCountry } from './validationFunction/chooseCountry/chooseCountry';
import { startBirthDateValidation } from './validationFunction/startBirthDateValidation';
import { startEmailValidation } from './validationFunction/startEmailValidation';
import { startNameValidation } from './validationFunction/startNameValidation';
import { startPasswordValidation } from './validationFunction/startPasswordValidation';
import { startPostcodeValidation } from './validationFunction/startPostcodeValidation';

export function validateThisInput(input: HTMLInputElement, error: HTMLElement) {
    input.addEventListener('input', (event: Event) => {
        const targ = event.target as HTMLInputElement;
        if (targ.id === 'email') {
            startEmailValidation(targ.value, error);
        } else if (targ.id === 'password') {
            startPasswordValidation(targ.value, error);
        } else if (targ.id === 'name' || targ.id === 'last-name' || targ.id === 'city' || targ.id === 'cityShip') {
            startNameValidation(targ.value, error);
        } else if (targ.id === 'birthdate') {
            startBirthDateValidation(targ.value, error);
        } else if (targ.id === 'postcode' || targ.id === 'postcodeShip') {
            startPostcodeValidation(targ.value, error, targ.id === 'postcode' ? 'country' : 'countryShip');
        } else if (targ.id === 'country' || targ.id === 'countryShip') {
            const countryId = targ.id;
            const listId = targ.id === 'country' ? 'country-list' : 'country-listShip';
            const codeId = targ.id === 'country' ? 'postcode' : 'postcodeShip';
            checkCountryInput(targ, error, targ.id);
            chooseCountry(targ, error, countryId, listId, codeId);
        }
    });
}
