// import { cartID } from '../../../..';
import { IAuthorisObj } from '../../../../core/interfaces/aythorisObjInterface';
import { constants } from '../../../../data/constants';
import { ILoginRequest } from '../../../../core/interfaces/LoginRequest';
import { CustomerLogin } from '../../../../server/CustomerLogin';

export async function logInToServer(obj: IAuthorisObj, page: HTMLElement) {
    try {
        const requestData: ILoginRequest = {
            email: obj.email,
            password: obj.password,
            anonymousCart: {
                id: constants.cartID,
                typeId: 'cart',
            },
        };

        const customerLogin = new CustomerLogin(constants.apiUrlLogin, constants.bearerToken);
        const loginResponse = await customerLogin.loginUser(requestData, page);
        return loginResponse;
    } catch (error) {
        if (error === '400') {
            console.log('Неверный логин или пароль');
        }
        // throw error;
    }
}
