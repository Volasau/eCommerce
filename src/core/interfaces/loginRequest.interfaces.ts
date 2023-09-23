import { AnonymousCartSignInMode } from '@commercetools/platform-sdk';

interface IAnonymousCart {
    id: string;
    typeId: string;
}

export interface ILoginRequest {
    email: string;
    password: string;
    anonymousCart?: IAnonymousCart;
    anonymousCartSignInMode?: AnonymousCartSignInMode;
}
