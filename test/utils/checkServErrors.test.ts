import { checkServErrors } from '../../src/pages/logReg/utils/checkServErrors.utils';

describe('checkServErrors function', () => {
    it('should add a click event listener to input elements', () => {
        const formHTML = document.createElement('form');
        const input1 = createInputWithClass('input');
        const input2 = createInputWithClass('input');
        formHTML.appendChild(input1);
        formHTML.appendChild(input2);

        checkServErrors(formHTML);

        expect(input1.click).toBeDefined();
        expect(input2.click).toBeDefined();
    });

    function createInputWithClass(className: string) {
        const input = document.createElement('input');
        input.className = className;
        return input;
    }
});
