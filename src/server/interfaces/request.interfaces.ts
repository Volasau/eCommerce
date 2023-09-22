export interface IRequest {
    get(endpoint: string): Promise<Response>;
    getAuth(endpoint: string): Promise<Response>;
    postAuth(endpoint: string, token: string, parse: string, bodyValue: BodyInit | null | undefined): Promise<Response>;
}
