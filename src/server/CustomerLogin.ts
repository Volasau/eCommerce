import fetch from 'node-fetch';
import { ICustomerSignInResponse } from '../core/interfaces/CustomerSignInResponse';
import { ILoginRequest } from '../core/interfaces/LoginRequest';

export class CustomerLogin {
    private apiUrlLogin: string;
    private bearerToken: string;

    constructor(apiUrlLogin: string, bearerToken: string) {
        this.apiUrlLogin = apiUrlLogin;
        this.bearerToken = bearerToken;
    }

    async loginUser(requestData: ILoginRequest) {
        try {
            const response = await fetch(this.apiUrlLogin, {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${this.bearerToken}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(requestData),
            });

            if (!response.ok) {
                console.log('Login error');
            }

            const data: ICustomerSignInResponse = await response.json();
            console.log('Response:', data.customer.firstName);
            return data.customer.firstName;
        } catch (error) {
            if (error === '400') {
                console.error('Неверный логин или пароль');
            }
        }
    }
}
