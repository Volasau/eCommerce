import { constants } from '../../data/constants';
import { IAccessTokenResponse } from '../../core/interfaces/accessTokenResponse';
import { handleServerErrorsLog } from '../function/handleServerErrorsLog';
import { request } from '../classes/requestClass';
import { PARSE } from '../interfaces/parseEnum';

export class TokenManager {
    private requestData: URLSearchParams;

    constructor(email: string, password: string) {
        this.requestData = new URLSearchParams({
            grant_type: 'password',
            username: email,
            password: password,
            scope: constants.scope,
        });
    }

    async getToken(page: HTMLElement): Promise<IAccessTokenResponse | void> {
        const servError = page.querySelector('#serv-error') as HTMLDivElement;
        const email = page.querySelector('#email') as HTMLInputElement;
        const password = page.querySelector('#password') as HTMLInputElement;
        try {
            const res: Response = await request.postAuth(
                constants.tokenUrl,
                constants.authHeader,
                PARSE.Xwww,
                this.requestData
            );

            if (!res.ok) {
                const status: number = res.status;
                handleServerErrorsLog(status, servError, email, password);
            }

            const data: IAccessTokenResponse = await res.json();
            const accessToken: string = data.access_token;
            console.log(accessToken);
            return data;
        } catch (error) {
            if (error === '400') {
                console.error('Неверный логин или пароль');
            }
        }
    }
}
