import { InnerForm } from '../formClasses/classForm';
import { FormBuilder } from '../formClasses/classFormBuilder';

const formId = 'login-form';
const email = new InnerForm('Email', 'text', 'email', 'email', 'email-error', 'Enter the e-mail');
const password = new InnerForm('Password', 'password', 'password', 'password', 'password-error', 'Enter the password');
const innerForms = [email, password];
const innerFormList = innerForms.map((elem) => elem.create());

export const login = new FormBuilder(formId, innerFormList);
