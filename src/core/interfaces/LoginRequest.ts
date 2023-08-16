export interface ILoginRequest {
    email: string;
    password: string;
    anonymousCart: {
        id: string;
        typeId: string;
    };
}
