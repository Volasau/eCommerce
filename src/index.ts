import './global.css';
import App from './pages/app/app';
import { addProductLink } from './pages/catalog/listeners/addProductLink';
import { getModal } from './pages/catalog/listeners/getModal';
import { paginateModal } from './pages/catalog/listeners/paginateModal';
import { removeModal } from './pages/catalog/listeners/removeModal';
import { tokenFetcher } from './server/token/accessTokenCC';
import { plusMinusOneProduct } from './pages/catalog/listeners/plusMinusOneProduct';
import { constants } from './data/constants';
import { submitLogin } from './pages/logReg/validation/authorizationFunctions/submitData/submitLogin';
import { submitReg } from './pages/logReg/validation/authorizationFunctions/submitData/submitReg';
import { addSubLink } from './pages/catalog/listeners/addSubLink';
import { switchPhoto } from './pages/catalog/listeners/switchPhoto';
import { addCategoryLink } from './pages/catalog/listeners/addCategoryLink';
import { filterProductList } from './pages/catalog/listeners/filterProductList';
import { searchByButton, searchByEnter } from './pages/catalog/listeners/searchProduct';
import { sortByValue } from './pages/catalog/listeners/sortProducts';
import { showFilter } from './pages/catalog/listeners/showFilter';
import { switchPageByHashChain } from './pages/catalog/listeners/switchPageByHashChain';
import { addProductToCartFromCatalog } from './pages/catalog/listeners/addProductToCartFromCatalog';
import { anonymousTokenManager } from './server/token/accessTokenAS';
import { IAccessTokenResponse } from './server/interfaces/accessTokenResponseInterface';
import { addItemToCart } from './server/cart/addLineItem';
import { cartManager } from './server/cart/createCart';
import { ICart } from './server/function/interfaces';
// import { AddLineItem } from './server/cart/addLineItem';
// import { getCartManager } from './server/cart/getCartById';

const app = new App();
app.run();
export const bearer_token_cc: Promise<string> = tokenFetcher.fetchAccessToken();
submitLogin(constants.authorization);
submitReg(constants.registration);
getModal();
removeModal();
paginateModal();
plusMinusOneProduct();
switchPhoto();
addProductLink();
addSubLink();
addCategoryLink();
filterProductList();
searchByButton();
searchByEnter();
sortByValue('cheap-view');
sortByValue('alpha-view');
showFilter();
switchPageByHashChain();
addProductToCartFromCatalog();

// это пойдет в add item to basket

export let bearerTokenAs = '';

(async () => {
    const anonymousTokenResponse = (await anonymousTokenManager.getAnonymousToken()) as IAccessTokenResponse;
    bearerTokenAs = anonymousTokenResponse.access_token as string;
    localStorage.setItem('anonymousToken', bearerTokenAs);
    console.log(bearerTokenAs);

    return bearerTokenAs;
})();

(async () => {
    const cartResponse = (await cartManager.createCart()) as ICart;
    localStorage.setItem('newCartId', cartResponse.id);
    return cartResponse;
})();
addItemToCart();
