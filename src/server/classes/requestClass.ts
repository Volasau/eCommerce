import { bearer_token_cc } from '../..';
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
