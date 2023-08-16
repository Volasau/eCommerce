// import { cartID } from '../../../..';
import { IAuthorisObj } from '../../../../core/interfaces/aythorisObjInterface';
import { constants } from '../../../../data/constants';
import { ILoginRequest } from '../../../../core/interfaces/LoginRequest';
import { CustomerLogin } from '../../../../server/CustomerLogin';

export async function logInToServer(obj: IAuthorisObj) {
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
        console.log(customerLogin);
        const loginResponse = await customerLogin.loginUser(requestData);
        return loginResponse;
    } catch (error) {
        console.error('Error in logInServer:', error);
        throw error;
    }
}
