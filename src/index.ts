import './global.css';
import App from './pages/app/app';
import { openProductPage } from './pages/catalog/listeners/openProductPage';
import { getModal } from './pages/catalog/listeners/getModal';
import { paginateModal } from './pages/catalog/listeners/paginateModal';
import { removeModal } from './pages/catalog/listeners/removeModal';
import { tokenFetcher } from './server/access_token_cc';
import { plusMinusOneProduct } from './pages/catalog/listeners/plusMinusOneProduct';

const app = new App();
app.run();
export const bearer_token_cc: Promise<string> = tokenFetcher.fetchAccessToken();
getModal();
removeModal();
paginateModal();
openProductPage();
plusMinusOneProduct();
