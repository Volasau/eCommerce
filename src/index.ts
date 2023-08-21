import './global.css';
import App from './pages/app/app';
import { tokenFetcher } from './server/access_token_cc';

const app = new App();
app.run();
export const bearer_token_cc: Promise<string> = tokenFetcher.fetchAccessToken();
