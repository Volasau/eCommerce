// Заглушка для TextEncoder и TextDecoder
global.TextEncoder = require('util').TextEncoder;
global.TextDecoder = require('util').TextDecoder;

import { InnerForm } from '../src/pages/logReg/formClasses/classForm';
import { FormBuilder } from '../src/pages/logReg/formClasses/classFormBuilder';

// Имитация DOM для тестов
const { JSDOM } = require('jsdom');
const jsdom = new JSDOM('<!doctype html><html><body></body></html>');
const { window } = jsdom;

global.window = window;
global.document = window.document;

describe('FormBuilder and InnerForm', () => {
    it('creates a login form', () => {
        const formId = 'login-form';
        const buttonText = 'Login';
        const email = new InnerForm('Email', 'text', 'email', 'email', 'email-error', 'Enter the e-mail');
        const password = new InnerForm(
            'Password',
            'password',
            'password',
            'password',
            'password-error',
            'Enter the password'
        );
        const innerForms = [email, password];
        const innerFormList = innerForms.map((elem) => elem.create());

        const login = new FormBuilder(formId, innerFormList);

        expect(login.formId).toBe('login-form');
        expect(login.innerFormList.length).toBe(2);
    });
});
