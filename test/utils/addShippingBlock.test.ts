import { addShippingBlock } from '../../src/pages/logReg/utils/addShippingBlock.utils';

describe('addShippingBlock function', () => {
    it('should add a shipping block with innerForm elements to formHTML', () => {
        const formHTML = document.createElement('form');
        const innerFormList = [
            createInnerForm('nameShip', 'Name'),
            createInnerForm('countryShip', 'Country'),
            createInnerForm('cityShip', 'City'),
            createInnerForm('postcodeShip', 'Postcode'),
            createInnerForm('emailShip', 'Email'),
        ];

        addShippingBlock(formHTML, innerFormList);

        const shippingBlock = formHTML.querySelector('#shipping');
        expect(shippingBlock).not.toBeNull();

        expect(shippingBlock!.innerHTML).toContain('<h3>SHIPPING ADDRESS</h3>');

        const countryShipInput = shippingBlock!.querySelector('#countryShip');
        const cityShipInput = shippingBlock!.querySelector('#cityShip');
        const postcodeShipInput = shippingBlock!.querySelector('#postcodeShip');
        expect(countryShipInput).not.toBeNull();
        expect(cityShipInput).not.toBeNull();
        expect(postcodeShipInput).not.toBeNull();

        const checkbox = shippingBlock!.querySelector('input[type="checkbox"]');
        expect(checkbox).not.toBeNull();
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
