import { bearer_token_cc } from '../..';
import { bearer_token_pf } from '../../pages/logReg/validation/authorizationFunctions/logInToServer';
import { IRequest } from '../interfaces/request.interfaces';

class Request implements IRequest {
    async getAuth(endpoint: string): Promise<Response> {
        const response = await fetch(endpoint, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${await bearer_token_cc}`,
                'Content-Type': 'application/json',
            },
        });
        return response;
    }

    async get(endpoint: string): Promise<Response> {
        const response = await fetch(endpoint, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${await bearer_token_cc}`,
            },
        });
        return response;
    }

    async getPassFlow(endpoint: string): Promise<Response> {
        const response = await fetch(endpoint, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${bearer_token_pf}`,
                'Content-Type': 'application/json',
            },
        });
        return response;
    }

    async getAnonymous(endpoint: string): Promise<Response> {
        const bearerTokenAs = sessionStorage.getItem('anonymousToken') as string;
        const response: Response = await fetch(endpoint, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${bearerTokenAs}`,
            },
        });
        return response;
    }

    async postAuth(
        endpoint: string,
        token: string,
        parse: string,
        bodyValue: BodyInit | null | undefined
    ): Promise<Response> {
        const response = await fetch(endpoint, {
            method: 'POST',
            headers: {
                Authorization: token,
                'Content-Type': `application/${parse}`,
            },
            body: bodyValue,
        });
        return response;
    }
}

export const request = new Request();
