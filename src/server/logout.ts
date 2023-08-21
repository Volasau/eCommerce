import fetch from 'node-fetch';
import { constants } from '../data/constants';

export class TokenRevoker {
    private authHost: string;
    private clientId: string;
    private clientSecret: string;

    constructor() {
        this.authHost = constants.authHost;
        this.clientId = constants.client_id;
        this.clientSecret = constants.client_secret;
    }

    private async revokeToken(token: string, tokenTypeHint: string): Promise<void> {
        const revokeUrl = `https://${this.authHost}/oauth/token/revoke`;

        try {
            const credentials = `${this.clientId}:${this.clientSecret}`;
            const base64Credentials: string = btoa(credentials);

            const requestData = new URLSearchParams();
            requestData.append('token', token);
            requestData.append('token_type_hint', tokenTypeHint);

            const response = await fetch(revokeUrl, {
                method: 'POST',
                headers: {
                    Authorization: `Basic ${base64Credentials}`,
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: requestData.toString(),
            });

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

// Example usage
