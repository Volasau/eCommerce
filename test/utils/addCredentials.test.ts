import { addCredentialsAndPersData } from '../../src/pages/logReg/utils/addCredentialsAndPersData.utils';

describe('addCredentialsAndPersData function', () => {
    it('should append innerForm elements to formHTML except for specific ids', () => {
        const formHTML = document.createElement('form');
        const innerFormList = [
            createInnerForm('name', 'Name'),
            createInnerForm('email', 'Email'),
            createInnerForm('country', 'Country'),
            createInnerForm('city', 'City'),
            createInnerForm('street', 'Street'),
            createInnerForm('postcode', 'Postcode'),
        ];

        addCredentialsAndPersData(formHTML, innerFormList);

        expect(formHTML.children.length).toBe(2);

        const nameInput = formHTML.querySelector('#name');
        const emailInput = formHTML.querySelector('#email');
        expect(nameInput).not.toBeNull();
        expect(emailInput).not.toBeNull();

        const countryInput = formHTML.querySelector('#country');
        const cityInput = formHTML.querySelector('#city');
        const streetInput = formHTML.querySelector('#street');
        const postcodeInput = formHTML.querySelector('#postcode');
        expect(countryInput).toBeNull();
        expect(cityInput).toBeNull();
        expect(streetInput).toBeNull();
        expect(postcodeInput).toBeNull();
    });

    function createInnerForm(id: string, label: string) {
        const innerForm = document.createElement('div');
        const input = document.createElement('input');
        input.id = id;
        const labelElement = document.createElement('label');
        labelElement.textContent = label;
        innerForm.appendChild(labelElement);
        innerForm.appendChild(input);
        return innerForm;
    }
});
