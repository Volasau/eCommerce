import { ILoginRequest } from '../../src/core/interfaces/loginRequest.interfaces';

describe('Login Request Interface', () => {
    it('should have the required properties', () => {
        const loginRequest: ILoginRequest = {
            email: 'test@example.com',
            password: 'password123',
        };

        expect(loginRequest).toBeDefined();
        expect(typeof loginRequest.email).toBe('string');
        expect(typeof loginRequest.password).toBe('string');
        expect(typeof loginRequest.email).not.toBe('number');
        expect(typeof loginRequest.password).not.toBe('number');
    });
});
