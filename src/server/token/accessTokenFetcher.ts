import { PARSE } from '../interfaces/parseEnum';
import { request } from '../classes/requestClass';
import { IAccessTokenResponse } from '../interfaces/accessTokenResponseInterface';
import { constants } from '../../data/constants';

export class AccessTokenFetcher {
    private readonly requestData: URLSearchParams;

    constructor() {
        this.requestData = new URLSearchParams({
            grant_type: 'client_credentials',
            scope: constants.scope,
        });
    }

    async fetchAccessToken(): Promise<string> {
        try {
            const res: Response = await request.postAuth(
                constants.authURL,
                constants.authHeader,
                PARSE.Xwww,
                this.requestData
            );

            if (!res.ok) {
                throw new Error(`Request failed with status: ${res.status}`);
            }

            const data: IAccessTokenResponse = await res.json();
            const access_token: string = data.access_token;
            return access_token;
        } catch (error) {
            console.error('Error:', error);
            throw error;
        }
    }
}

export const tokenFetcher: AccessTokenFetcher = new AccessTokenFetcher();
