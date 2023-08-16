import { bearerToken } from '../../../..';
import { IAuthorisObj } from '../../../../core/interfaces/aythorisObjInterface';
import { constants } from '../../../../data/constants';
import { ILoginRequest } from '../../../../core/interfaces/LoginRequest';
import { CustomerLogin } from '../../../../server/CustomerLogin';
import { cartID } from '../../../../server/anonymousCartId';

export async function logInToServer(obj: IAuthorisObj) {
    try {
        const requestData: ILoginRequest = {
            email: obj.email,
            password: obj.password,
            anonymousCart: {
                id: cartID,
                typeId: 'cart',
            },
        };

        const customerLogin = new CustomerLogin(constants.apiUrlLogin, await bearerToken);
        const loginResponse = await customerLogin.loginUser(requestData);
        return loginResponse;
    } catch (error) {
        console.error('Error in authServer:', error);
        throw error;
    }
}
