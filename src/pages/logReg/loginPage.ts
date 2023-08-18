import Page from '../../core/template/page';
import { login } from './formObjects/loginObj';
import '../../css/login.css';
import { IAuthorisObj } from '../../core/interfaces/aythorisObjInterface';
import { submitData } from './validation/authorisationFunctions/submitData/submitData';

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
        this.logInOrReg();
        return this.container;
    }

    logInOrReg() {
        submitData(this.container, this.authorisObj);
    }
}

export default LoginPage;
