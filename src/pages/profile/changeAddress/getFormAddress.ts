import { InnerForm } from '../../logReg/formClasses/classForm';
import { IForm } from '../interfaces/iFormInterface';

export function getFormAddress(): IForm {
    const formAddress = document.createElement('form');
    formAddress.classList.add('form__adress');

    const countryN = new InnerForm('Country', 'text', 'country', 'country', 'country-error', 'Enter the country');
    const cityN = new InnerForm('City', 'text', 'city', 'city', 'city-error', 'Enter the city');
    const street = new InnerForm('Street', 'text', 'street', 'street', 'street-error', 'Enter the street');
    const postCode = new InnerForm('Post Code', 'text', 'postcode', 'postcode', 'postcode-error', 'Enter the postcode');

    formAddress.appendChild(countryN.create());
    formAddress.appendChild(cityN.create());
    formAddress.appendChild(street.create());
    formAddress.appendChild(postCode.create());

    return { form: formAddress, inners: [countryN, cityN, street, postCode] };
}
