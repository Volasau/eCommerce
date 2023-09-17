import { constants } from '../../data/constants';
import { IAccessTokenResponse } from '../../core/interfaces/accessTokenResponse';
import { request } from '../classes/requestClass';
import { PARSE } from '../interfaces/parseEnum';

export class AnonymousTokenManager {
    private requestData: URLSearchParams;

    constructor() {
        this.requestData = new URLSearchParams({
            grant_type: 'client_credentials',
            scope: constants.scope,
        });
    }

    async getAnonymousToken(): Promise<IAccessTokenResponse | void> {
        try {
            const res: Response = await request.postAuth(
                constants.anonymousTokenUrl,
                constants.authHeader,
                PARSE.Xwww,
                this.requestData
            );

            if (!res.ok) {
                throw new Error(`Request failed with status: ${res.status}`);
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

export async function createAnonymousToken() {
    const anonymousTokenManager = new AnonymousTokenManager();
    const anonymousTokenResponse = (await anonymousTokenManager.getAnonymousToken()) as IAccessTokenResponse;
    const bearerTokenAs = anonymousTokenResponse.access_token as string;
    sessionStorage.setItem('anonymousToken', bearerTokenAs);

    return bearerTokenAs;
}
