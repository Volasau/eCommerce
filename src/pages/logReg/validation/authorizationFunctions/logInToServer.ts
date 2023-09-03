import { IAuthorizationObject } from '../../../../core/interfaces/authorizationObjectInterface';
import { constants } from '../../../../data/constants';
import { ILoginRequest } from '../../../../core/interfaces/LoginRequest';
import { CustomerLogin } from '../../../../server/CustomerLogin';
import { TokenManager } from '../../../../server/accessTokenPF';
import { IAccessTokenResponse } from '../../../../core/interfaces/AccessTokenResponse';

export let bearer_token_pf = '';

export async function logInToServer(obj: IAuthorizationObject, page: HTMLElement) {
    try {
        const requestData: ILoginRequest = {
            email: obj.email,
            password: obj.password,
        };

        const tokenManager = new TokenManager(requestData.email, requestData.password);
        const tokenResponse = (await tokenManager.getToken(page)) as IAccessTokenResponse;
        bearer_token_pf = tokenResponse.access_token;
        const customerLogin = new CustomerLogin(constants.apiUrlLogin, tokenResponse.access_token);
        const loginResponse = (await customerLogin.loginUser(requestData)) as string;
        localStorage.setItem('bearer_token_pf', `${bearer_token_pf}`);

        return loginResponse;
    } catch (error) {
        if (error === '400') {
            console.error('Неверный логин или пароль');
        }
    }
}
