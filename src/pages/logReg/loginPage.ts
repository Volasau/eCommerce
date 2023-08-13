import Page from '../../core/template/page';
import { login } from './formObjects/loginObj';
import '../../css/login.css';
import { IAuthorisObj } from '../../core/interface/aythorisObjInterface';
import { submitData } from './validation/authorisationFunctions/submitData';

class LoginPage extends Page {
    static TextObject = {
        MainTitle: 'Login Page',
    };
    protected authorisObj: IAuthorisObj = { email: '', password: '' };

    constructor(id: string) {
        super(id);
    }

    render() {
        const title = this.createHeaderTitle(LoginPage.TextObject.MainTitle);
        const loginForm = login.build();
        this.container.append(title, loginForm);
        this.autorisation();
        return this.container;
    }

    autorisation() {
        submitData(this.container, this.authorisObj);
    }
}

export default LoginPage;
