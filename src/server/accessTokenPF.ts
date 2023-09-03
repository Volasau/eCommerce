import fetch from 'node-fetch';
import { constants } from '../data/constants';
import { IAccessTokenResponse } from '../core/interfaces/accessTokenResponse';
import { handleServerErrorsLog } from './handleServerErrorsLog';

export class TokenManager {
    private authHost: string;
    private projectKey: string;
    private authHeader: string;
    private scope: string;
    private requestData: URLSearchParams;

    constructor(email: string, password: string) {
        this.authHost = constants.authHost;
        this.projectKey = constants.projectKey;
        this.authHeader = `Basic  ${Buffer.from('evZAyazdZMrrHjVRwC-BYTHe:SjCFe1mgZ1njSSpehCpExMvHpXRjCBND').toString(
            'base64'
        )}`;
        this.scope = constants.scope;
        this.requestData = new URLSearchParams({
            grant_type: 'password',
            username: email,
            password: password,
            scope: this.scope,
        });
    }

    async getToken(page: HTMLElement): Promise<IAccessTokenResponse | void> {
        const tokenUrl = `https://${this.authHost}/oauth/${this.projectKey}/customers/token`;
        const servError = page.querySelector('#serv-error') as HTMLDivElement;
        const email = page.querySelector('#email') as HTMLInputElement;
        const password = page.querySelector('#password') as HTMLInputElement;
        try {
            const response = await fetch(tokenUrl, {
                method: 'POST',
                headers: {
                    Authorization: this.authHeader,
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: this.requestData,
            });

            if (!response.ok) {
                // throw new Error(`Token request failed with status: ${response.status}`);
                const status = response.status;
                handleServerErrorsLog(status, servError, email, password);
            }

            const data: IAccessTokenResponse = await response.json();
            const accessToken: string = data.access_token;
            console.log('Access Token:', accessToken);
            return data;
        } catch (error) {
            if (error === '400') {
                console.error('Неверный логин или пароль');
            }
        }
    }
}
