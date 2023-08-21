import { bearer_token } from '../validation/authorisationFunctions/logInToServer';
import { TokenRevoker } from '../../../server/logout';

const accessToken: string = bearer_token;

export const logoutAction = async () => {
    const tokenRevoker = new TokenRevoker();
    const logoutResponse = tokenRevoker.revokeAccessToken(accessToken);
    console.log(logoutResponse);
};
