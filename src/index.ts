import App from './pages/app/app';
import { createAnonymousCartId } from './server/createAnonymousCartId';

const app = new App();
app.run();
createAnonymousCartId();
