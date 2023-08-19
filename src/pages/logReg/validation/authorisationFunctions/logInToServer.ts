import { IAuthorisObj } from '../../../../core/interfaces/aythorisObjInterface';
import { constants } from '../../../../data/constants';
import { ILoginRequest } from '../../../../core/interfaces/LoginRequest';
import { CustomerLogin } from '../../../../server/CustomerLogin';
import { TokenManager } from '../../../../server/access_token';
import { IAccessTokenResponse } from '../../../../core/interfaces/AccessTokenResponse';

export let bearer_token = '';

export async function logInToServer(obj: IAuthorisObj, page: HTMLElement) {
    try {
        const requestData: ILoginRequest = {
            email: obj.email,
            password: obj.password,
        };

        const tokenManager = new TokenManager(requestData.email, requestData.password);
        const tokenResponse = (await tokenManager.getToken(page)) as IAccessTokenResponse;
        bearer_token = tokenResponse.access_token;
        const customerLogin = new CustomerLogin(constants.apiUrlLogin, tokenResponse.access_token);
        const loginResponse = (await customerLogin.loginUser(requestData)) as string;

        return loginResponse;
    } catch (error) {
        if (error === '400') {
            console.error('Неверный логин или пароль');
        }
    }
}
