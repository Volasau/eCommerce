import './global.css';
import App from './pages/app/app';
import { openProductPage } from './pages/catalog/listeners/openProductPage';
import { getModal } from './pages/catalog/listeners/getModal';
import { paginateModal } from './pages/catalog/listeners/paginateModal';
import { removeModal } from './pages/catalog/listeners/removeModal';
import { tokenFetcher } from './server/access_token_cc';
import { plusMinusOneProduct } from './pages/catalog/listeners/plusMinusOneProduct';
import { constants } from './data/constants';
import { submitLogin } from './pages/logReg/validation/authorisationFunctions/submitData/submitLogin';
import { submitReg } from './pages/logReg/validation/authorisationFunctions/submitData/submitReg';
import { QueryAllProducts } from './server/products/QueryAllProducts';
import { AllProductDetailsGQL } from './server/products/AllProductDetailsGQL';

const app = new App();
app.run();
export const bearer_token_cc: Promise<string> = tokenFetcher.fetchAccessToken();
submitLogin(constants.authorisObj);
submitReg(constants.regObj);
getModal();
removeModal();
paginateModal();
openProductPage();
plusMinusOneProduct();

const ids: string[] = [];
(async () => {
    const getAllProducts = new QueryAllProducts();

    try {
        const products = await getAllProducts.getAllProducts();
        const productIds: string[] = products.map((product: { id: string }) => product.id);
        console.log('All Products:', productIds);
        const getAllAttributes = new AllProductDetailsGQL();
        try {
            productIds.forEach((productId) => {
                (async () => {
                    const productDetails = await getAllAttributes.getProductDetails(productId);
                    productDetails['id'] = productId;
                    console.log('Product Details:', productDetails);
                })();
            });
        } catch (error) {
            console.error('An error occurred:', error);
        }

        return ids;
    } catch (error) {
        console.error('An error occurred:', error);
    }
})();
