import fetch from 'node-fetch';
import { ICustomerSignInResponse } from '../core/interfaces/CustomerSignInResponse';
import { ILoginRequest } from '../core/interfaces/LoginRequest';
import { handleServerErrorsLog } from './handleServerErrorsLog';

export class CustomerLogin {
    private apiUrlLogin: string;
    private bearerToken: string;

    constructor(apiUrlLogin: string, bearerToken: string) {
        this.apiUrlLogin = apiUrlLogin;
        this.bearerToken = bearerToken;
    }

    async loginUser(requestData: ILoginRequest, page: HTMLElement) {
        const servError = page.querySelector('#serv-error') as HTMLDivElement;
        const email = page.querySelector('#email') as HTMLInputElement;
        const password = page.querySelector('#password') as HTMLInputElement;
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
                const status = 400;
                handleServerErrorsLog(status, servError, email, password);
            }

            const data: ICustomerSignInResponse = await response.json();
            console.log('Response:', data.customer.firstName);
            return data.customer.firstName;
        } catch (error) {
            console.error(error);
        }
    }
}
