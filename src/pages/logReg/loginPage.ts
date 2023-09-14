import Page from '../../core/template/page';
import { login } from './formObjects/login';
import '../../css/login.css';
import { createLink } from './utils/createLink.utils';

class LoginPage extends Page {
    text: string;

    constructor(id: string) {
        super(id);
        this.text = 'Login Page';
    }

    async render(): Promise<HTMLElement> {
        const title = this.createHeaderTitle(this.text);
        const basketLink = createLink('#/basket', '', 'Basket🧺', '');
        const aboutUsLink = createLink('#/aboutus', '', 'AboutUs👥', '');
        const loginForm = login.build();
        const registrLink = createLink('#/registr', "Haven't registered yet? Sing up ", 'Here➕', '');
        this._container.append(basketLink, aboutUsLink, title, loginForm, registrLink);
        return this._container;
    }
}

export default LoginPage;
