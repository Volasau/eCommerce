import { InnerForm } from '../formClasses/classForm';
import { FormBuilder } from '../formClasses/classFormBuilder';

const formId = 'registration-form';
const email = new InnerForm('Email', 'text', 'email', 'email', 'email-error', 'Enter the e-mail');
const password = new InnerForm('Password', 'password', 'password', 'password', 'password-error', 'Enter the password');
const firstName = new InnerForm('First Name', 'text', 'name', 'name', 'name-error', 'Enter the first name');
const lastName = new InnerForm('Last Name', 'text', 'lastName', 'last-name', 'last-name-error', 'Enter the last name');
const country = new InnerForm('Country', 'text', 'country', 'country', 'country-error', 'Enter the country');
const city = new InnerForm('City', 'text', 'city', 'city', 'city-error', 'Enter the city');
const street = new InnerForm('Street', 'text', 'street', 'street', 'street-error', 'Enter the street');
const postCode = new InnerForm('Post Code', 'text', 'postcode', 'postcode', 'postcode-error', 'Enter the postcode');
const birthDate = new InnerForm('Date of Birth', 'date', 'birthDate', 'birthdate', 'birthdate-error', 'Choose date');
const countryShip = new InnerForm(
    'Country',
    'text',
    'countryShip',
    'country',
    'country-errorShip',
    'Enter the country'
);
const cityShip = new InnerForm('City', 'text', 'cityShip', 'city', 'city-errorShip', 'Enter the city');
const streetShip = new InnerForm('Street', 'text', 'streetShip', 'street', 'street-errorShip', 'Enter the street');
const postCodeShip = new InnerForm(
    'Post Code',
    'text',
    'postcodeShip',
    'postcode',
    'postcode-errorShip',
    'Enter the postcode'
);
const innerForms = [
    email,
    password,
    firstName,
    lastName,
    birthDate,
    country,
    city,
    street,
    postCode,
    countryShip,
    cityShip,
    streetShip,
    postCodeShip,
];
const innerFormList = innerForms.map((elem) => elem.create());

export const registration = new FormBuilder(formId, innerFormList);
