import { checkCountry } from './validationFunction/checkCountry/checkCountry';
import { startBirthDateValidation } from './validationFunction/startBirthDateValidation';
import { startEmailValidation } from './validationFunction/startEmailValidation';
import { startNameValidation } from './validationFunction/startNameValidation';
import { startPasswordValidation } from './validationFunction/startPasswordValidation';
import { startPostcodeValidation } from './validationFunction/startPostcodeValidation';
import { startStreetValidation } from './validationFunction/startStreetValidation';

export function validateThisInput(input: HTMLInputElement, error: HTMLElement) {
    input.addEventListener('input', (event: Event) => {
        const target = event.target as HTMLInputElement;
        switch (target.id) {
            case 'email':
                startEmailValidation(target.value, error);
                break;
            case 'password':
                startPasswordValidation(target.value, error);
                break;
            case 'name':
            case 'lastName':
            case 'city':
            case 'cityShip':
                startNameValidation(target.value, error);
                break;
            case 'birthDate':
                startBirthDateValidation(target.value, error);
                break;
            case 'postcode':
            case 'postcodeShip':
                startPostcodeValidation(target.value, error, target.id === 'postcode' ? 'country' : 'countryShip');
                break;
            case 'country':
            case 'countryShip':
                checkCountry(target, error);
                break;
            case 'street':
            case 'streetShip':
                startStreetValidation(target.value, error);
                break;
        }
    });
}
