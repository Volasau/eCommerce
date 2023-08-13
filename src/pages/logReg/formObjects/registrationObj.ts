import { InnerForm } from '../formClasses/classForm';
import { FormBuilder } from '../formClasses/classFormBuilder';

const formId = 'registration-form';
const buttonText = 'Register';
const email = new InnerForm('Email', 'text', 'email', 'email', 'email-error', 'Enter the e-mail');
const password = new InnerForm('Password', 'password', 'password', 'password', 'password-error', 'Enter the password');
const firstName = new InnerForm('First Name', 'text', 'name', 'name', 'name-error', 'Enter the first name');
const lastName = new InnerForm('Last Name', 'text', 'lastName', 'last-name', 'last-name-error', 'Enter the last name');
const country = new InnerForm('Country', 'text', 'country', 'country', 'country-error', 'Enter the country');
const city = new InnerForm('City', 'text', 'city', 'city', 'city-error', 'Enter the city');
const street = new InnerForm('Street', 'text', 'street', 'street', 'street-error', 'Enter the street');
const postCode = new InnerForm('Post Code', 'text', 'postcode', 'postcode', 'postcode-error', 'Enter the postcode');
const birthDate = new InnerForm('Date of Birth', 'date', 'birthDate', 'birthdate', 'birthdate-error', 'Choose date');
const innerForms = [email, password, firstName, lastName, country, city, street, postCode, birthDate];
const innerFormList = innerForms.map((elem) => elem.create());

export const registration = new FormBuilder(formId, innerFormList, buttonText);
