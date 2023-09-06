import './global.css';
import App from './pages/app/app';
import { addProductLink } from './pages/catalog/listeners/addProductLink';
import { getModal } from './pages/catalog/listeners/getModal';
import { paginateModal } from './pages/catalog/listeners/paginateModal';
import { removeModal } from './pages/catalog/listeners/removeModal';
import { tokenFetcher } from './server/accessTokenCC';
import { plusMinusOneProduct } from './pages/catalog/listeners/plusMinusOneProduct';
import { constants } from './data/constants';
import { submitLogin } from './pages/logReg/validation/authorizationFunctions/submitData/submitLogin';
import { submitReg } from './pages/logReg/validation/authorizationFunctions/submitData/submitReg';
import { addSubLink } from './pages/catalog/listeners/addSubLink';
import { switchPhoto } from './pages/catalog/listeners/switchPhoto';
import { addCategoryLink } from './pages/catalog/listeners/addCategoryLink';
import { filterProductList } from './pages/catalog/listeners/filterProductList';
import { searchByButton, searchByEnter } from './pages/catalog/listeners/searchProduct';
import { sortByAlphabet, sortByCheap } from './pages/catalog/listeners/sortProducts';
import { showFilter } from './pages/catalog/listeners/showFilter';
import { switchPageByHashChain } from './pages/catalog/listeners/switchPageByHashChain';
// import { resetFilter } from './pages/catalog/listeners/resetFilter';
// function locationHashChanged() {
//     if (location.hash) {
//         const hash = location.hash.replace('#', '');
//         history.replaceState({}, '', hash);
//     }
// }
// window.onhashchange = locationHashChanged;

const app = new App();
app.run();
export const bearer_token_cc: Promise<string> = tokenFetcher.fetchAccessToken();
submitLogin(constants.authorizationObject);
submitReg(constants.registrationObj);
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
sortByCheap();
sortByAlphabet();
showFilter();
switchPageByHashChain();
// resetFilter();
