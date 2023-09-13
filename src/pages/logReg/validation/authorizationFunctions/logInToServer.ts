import { IAuthorization } from '../../../../core/interfaces/authorizationInterface';
import { ILoginRequest } from '../../../../core/interfaces/loginRequest';
import { TokenManager } from '../../../../server/token/accessTokenPF';
import { IAccessTokenResponse } from '../../../../core/interfaces/accessTokenResponse';
import { CustomerLogin } from '../../../../server/customer/customerLogin';
import { Customer } from '@commercetools/platform-sdk';

export let bearer_token_pf = '';

export async function logInToServer(log: IAuthorization, page: HTMLElement): Promise<Customer | Error | void> {
    try {
        const requestData: ILoginRequest = {
            email: log.email,
            password: log.password,
        };

        const tokenManager = new TokenManager(requestData.email, requestData.password);
        const tokenResponse = (await tokenManager.getToken(page)) as IAccessTokenResponse;
        bearer_token_pf = tokenResponse.access_token;
        const customerLogin = new CustomerLogin(tokenResponse.access_token);
        const loginResponse = (await customerLogin.loginUser(requestData)) as Customer;
        localStorage.setItem('bearer_token_pf', `${bearer_token_pf}`);

        return loginResponse;
    } catch (error) {
        if (error === '400') {
            console.error('Неверный логин или пароль');
        }
    }
}
