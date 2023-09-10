import { ILoginRequest } from '../../core/interfaces/loginRequest';

export type bodyType = undefined | ILoginRequest | URLSearchParams;

export interface IRequest {
    get(endpoint: string): Promise<Response>;
    getAuth(endpoint: string): Promise<Response>;
    postAuth(endpoint: string, token: string, parse: string, bodyValue: BodyInit | null | undefined): Promise<Response>;
}
