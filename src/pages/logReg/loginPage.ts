import Page from '../../core/template/page';
import { login } from './formObjects/loginObj';
import '../../css/login.css';

class LoginPage extends Page {
    static TextObject = {
        MainTitle: 'Login Page',
    };

    constructor(id: string) {
        super(id);
    }

    render() {
        const title = this.createHeaderTitle(LoginPage.TextObject.MainTitle);
        const loginForm = login.build();
        this.container.append(title, loginForm);
        return this.container;
    }
}

export default LoginPage;
