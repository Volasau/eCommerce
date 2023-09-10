import { constants } from '../data/constants';
import { request } from './classes/requestClass';
import { PARSE } from './interfaces/parseEnum';

export class TokenRevoker {
    private async revokeToken(token: string, tokenTypeHint: string): Promise<void> {
        try {
            const credentials = `${constants.client_id}:${constants.client_secret}`;
            const base64Credentials: string = btoa(credentials);
            const auth = `Basic ${base64Credentials}`;

            const requestData = new URLSearchParams();
            requestData.append('token', token);
            requestData.append('token_type_hint', tokenTypeHint);

            const response = await request.postAuth(constants.revokeUrl, auth, PARSE.Xwww, requestData.toString());

            if (response.status === 200) {
                console.log('Token successfully revoked.');
            } else {
                console.log('Failed to revoke token.');
            }
        } catch (error) {
            console.log('Error revoking token');
        }
    }

    public async revokeAccessToken(accessToken: string): Promise<void> {
        await this.revokeToken(accessToken, 'access_token');
    }
}
