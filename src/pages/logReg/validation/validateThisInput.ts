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
        }
    });

    input.addEventListener('input', (event) => {
        const target = event.target as HTMLInputElement;
        if (target.id === 'country') {
            checkCountryInput(target, error);
            chooseCountry(target, error);
        }
    });
}
