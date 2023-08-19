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
        } else if (targ.id === 'name' || targ.id === 'last-name' || targ.id === 'city' || targ.id === 'city-ship') {
            startNameValidation(targ.value, error);
        } else if (targ.id === 'birthdate') {
            startBirthDateValidation(targ.value, error);
        } else if (targ.id === 'postcode' || targ.id === 'postcode-ship') {
            startPostcodeValidation(targ.value, error, targ.id === 'postcode' ? 'country' : 'country-ship');
        } else if (targ.id === 'country' || targ.id === 'country-ship') {
            const countryId = targ.id;
            const listId = targ.id === 'country' ? 'country-list' : 'country-list-ship';
            const codeId = targ.id === 'country' ? 'postcode' : 'postcode-ship';
            checkCountryInput(targ, error, targ.id);
            chooseCountry(targ, error, countryId, listId, codeId);
        }
    });
}
