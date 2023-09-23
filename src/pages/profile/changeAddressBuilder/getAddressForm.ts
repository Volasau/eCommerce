import { InnerForm } from '../../logReg/formClasses/classForm';
import { IForm } from '../interfaces/iForm.interfaces';

export function getAddressForm(
    countryText: string,
    cityText: string,
    streetNameText: string,
    codePostText: string
): IForm {
    const form = document.createElement('form');
    form.classList.add('form__adress');

    const countryForm = new InnerForm('Country', 'text', 'country', 'country', 'country-error', countryText);
    const city = new InnerForm('City', 'text', 'city', 'city', 'city-error', cityText);
    const street = new InnerForm('Street', 'text', 'street', 'street', 'street-error', streetNameText);
    const postCode = new InnerForm('Post Code', 'text', 'postcode', 'postcode', 'postcode-error', codePostText);

    countryForm.inputHTML.value = countryText;
    city.inputHTML.value = cityText;
    street.inputHTML.value = streetNameText;
    postCode.inputHTML.value = codePostText;

    form.appendChild(countryForm.create());
    form.appendChild(city.create());
    form.appendChild(street.create());
    form.appendChild(postCode.create());

    return { form: form, inners: [countryForm, city, street, postCode] };
}
