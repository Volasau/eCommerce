import { bearer_token } from '../validation/authorisationFunctions/logInToServer';
import { TokenRevoker } from '../../../server/logout';

export const logoutAction = async () => {
    const tokenRevoker = new TokenRevoker();
    await tokenRevoker.revokeAccessToken(bearer_token);
};
