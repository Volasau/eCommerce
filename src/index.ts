import App from './pages/app/app';
import { tokenFetcher } from './server/access_token';

const app = new App();
app.run();
export const bearerToken: Promise<string> = tokenFetcher.fetchAccessToken();
