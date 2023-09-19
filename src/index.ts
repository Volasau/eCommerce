import './global.css';
import { addListeners } from './listeners/addListeners';
import App from './pages/app/app';
import { tokenFetcher } from './server/token/accessTokenCC';

const app = new App();
app.run();
export const bearer_token_cc: Promise<string> = tokenFetcher.fetchAccessToken();
addListeners();
