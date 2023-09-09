import Page from '../../core/template/page';
import { login } from './formObjects/login';
import '../../css/login.css';
import { createLink } from './utils/createLink.utils';

class LoginPage extends Page {
    textObj: string;

    constructor(id: string) {
        super(id);
        this.textObj = 'Login Page';
    }

    async render() {
        const title = this.createHeaderTitle(this.textObj);
        const loginForm = login.build();
        const registrLink = createLink('#/registr', "Haven't registered yet? Sing up ", 'Here➕', '');
        this._container.append(title, loginForm, registrLink);
        return this._container;
    }
}

export default LoginPage;
