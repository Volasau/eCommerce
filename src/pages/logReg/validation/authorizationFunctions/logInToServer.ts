import { IAuthorization } from '../../../../core/interfaces/authorizationInterface';
import { ILoginRequest } from '../../../../core/interfaces/loginRequest';
import { TokenManager } from '../../../../server/token/accessTokenPF';
import { IAccessTokenResponse } from '../../../../core/interfaces/accessTokenResponse';
import { CustomerLogin } from '../../../../server/customer/customerLogin';
import { Customer } from '@commercetools/platform-sdk';
import { cartByCustomerId } from '../../../../server/cart/getCartByCustomerId';

export let bearer_token_pf = '';

export async function logInToServer(log: IAuthorization, page: HTMLElement): Promise<Customer | Error | void> {
    const cartId = localStorage.getItem('newCartId') as string;
    try {
        const requestData: ILoginRequest =
            cartId !== null
                ? {
                      email: log.email,
                      password: log.password,
                      anonymousCart: {
                          id: cartId,
                          typeId: 'cart',
                      },
                      anonymousCartSignInMode: 'MergeWithExistingCustomerCart',
                  }
                : {
                      email: log.email,
                      password: log.password,
                      anonymousCartSignInMode: 'MergeWithExistingCustomerCart',
                  };

        const tokenManager = new TokenManager(requestData.email, requestData.password);
        const tokenResponse = (await tokenManager.getToken(page)) as IAccessTokenResponse;
        bearer_token_pf = tokenResponse.access_token;
        const customerLogin = new CustomerLogin(tokenResponse.access_token);
        const loginResponse = (await customerLogin.loginUser(requestData)) as Customer;
        const cart = await cartByCustomerId.getCartsByCustomerId(loginResponse.id);
        console.log(cart);
        localStorage.setItem('newCartId', cart.id);
        localStorage.setItem('bearer_token_pf', `${bearer_token_pf}`);

        return loginResponse;
    } catch (error) {
        if (error === '400') {
            console.error('Неверный логин или пароль');
        }
    }
}
