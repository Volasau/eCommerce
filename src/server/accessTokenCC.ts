import fetch from 'node-fetch';

export const authUrl = 'https://auth.europe-west1.gcp.commercetools.com/oauth/token';
export const clientId = 'evZAyazdZMrrHjVRwC-BYTHe';
export const clientSecret = 'SjCFe1mgZ1njSSpehCpExMvHpXRjCBND';
export const scope = 'manage_project:01082023';

interface AccessTokenResponse {
    access_token: string;
    expires_in: number;
    scope: string;
    token_type: string;
}

export class AccessTokenFetcher {
    private authUrl: string;
    private authHeader: string;
    private requestData: URLSearchParams;

    constructor(authUrl: string, clientId: string, clientSecret: string, scope: string) {
        this.authUrl = authUrl;
        this.authHeader = `Basic ${Buffer.from(`${clientId}:${clientSecret}`).toString('base64')}`;
        this.requestData = new URLSearchParams({
            grant_type: 'client_credentials',
            scope: scope,
        });
    }

    async fetchAccessToken(): Promise<string> {
        try {
            const response = await fetch(this.authUrl, {
                method: 'POST',
                headers: {
                    Authorization: this.authHeader,
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: this.requestData,
            });

            if (!response.ok) {
                throw new Error(`Request failed with status: ${response.status}`);
            }

            const data: AccessTokenResponse = await response.json();
            const access_token: string = data.access_token;
            return access_token;
        } catch (error) {
            console.error('Error:', error);
            throw error;
        }
    }
}

export const tokenFetcher: AccessTokenFetcher = new AccessTokenFetcher(authUrl, clientId, clientSecret, scope);
