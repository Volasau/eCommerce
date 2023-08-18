import { checkCountryInput } from './validationFunction/checkCountryInput';
import { chooseCountry } from './validationFunction/chooseCountry/chooseCountry';
import { startBirthDateValidation } from './validationFunction/startBirthDateValidation';
import { startEmailValidation } from './validationFunction/startEmailValidation';
import { startNameValidation } from './validationFunction/startNameValidation';
import { startPasswordValidation } from './validationFunction/startPasswordValidation';
import { startPostcodeValidation } from './validationFunction/startPostcodeValidation';

export function validateThisInput(input: HTMLInputElement, error: HTMLElement) {
    input.addEventListener('input', (event: Event) => {
        const target = event.target as HTMLInputElement;
        if (target.id === 'email') {
            startEmailValidation(target.value, error);
        } else if (target.id === 'password') {
            startPasswordValidation(target.value, error);
        } else if (target.id === 'name' || target.id === 'last-name' || target.id === 'city') {
            startNameValidation(target.value, error);
        } else if (target.id === 'birthdate') {
            startBirthDateValidation(target.value, error);
        } else if (target.id === 'postcode') {
            startPostcodeValidation(target.value, error);
        } else if (target.id === 'country') {
            checkCountryInput(target, error);
            chooseCountry(target, error);
        }
    });
}
