import { handleServerErrorsLog } from '../../src/server/function/handleServerErrorsLog';

describe('handleServerErrorsLog function', () => {
    it('should handle 400 and 401 status codes', () => {
        const serverError = document.createElement('div');
        const email = document.createElement('input');
        const password = document.createElement('input');

        handleServerErrorsLog(400, serverError, email, password);

        expect(serverError.innerHTML).toBe('Wrong login or password. Check the correctness of the entered data');
        expect(serverError.style.color).toBe('red');
        expect(email.style.border).toBe('2px solid red');
        expect(password.style.border).toBe('2px solid red');
    });

    it('should handle 502 and 504 status codes', () => {
        const serverError = document.createElement('div');
        const email = document.createElement('input');
        const password = document.createElement('input');

        handleServerErrorsLog(502, serverError, email, password);

        expect(serverError.innerHTML).toBe('There are problems communicating with the server. Try again');
        expect(serverError.style.color).toBe('red');
        expect(email.style.border).toBe('2px solid red');
        expect(password.style.border).toBe('2px solid red');
    });

    it('should handle other status codes', () => {
        const serverError = document.createElement('div');
        const email = document.createElement('input');
        const password = document.createElement('input');

        handleServerErrorsLog(503, serverError, email, password);

        expect(serverError.innerHTML).toBe('Unforeseen problems arose. Try later');
        expect(serverError.style.color).toBe('red');
        expect(email.style.border).toBe('2px solid red');
        expect(password.style.border).toBe('2px solid red');
    });
});
