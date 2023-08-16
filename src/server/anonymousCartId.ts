import { constants } from '../data/constants';
import { AccessTokenFetcher, authUrl, clientId, clientSecret, scope } from './access_token';
import { CartCreator } from './createCart';

export let cartID = '';
export const anonymousCartId: Promise<void> = (async () => {
    const tokenFetcher = new AccessTokenFetcher(authUrl, clientId, clientSecret, scope);
    constants.bearerToken = await tokenFetcher.fetchAccessToken();
    const cartCreator = new CartCreator(constants.apiUrlCarts, constants.bearerToken);
    cartID = await cartCreator.createCart(constants.requestDataCart);
})();
