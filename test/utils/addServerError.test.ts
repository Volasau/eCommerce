import { addServerError } from '../../src/pages/logReg/utils/addServerError.utils';

describe('addServerError function', () => {
    it('should add a server error element to formHTML', () => {
        const formHTML = document.createElement('form');

        addServerError(formHTML);

        const serverError = formHTML.querySelector('#serv-error');
        expect(serverError).not.toBeNull();
        expect(serverError instanceof HTMLDivElement).toBe(true);
    });
});
