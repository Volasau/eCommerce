import Page from '../../core/template/page';
import { registration } from './formObjects/registration';
import { createLink } from './utils/createLink.utils';

class RegistrPage extends Page {
    textObj: string;

    constructor(id: string) {
        super(id);
        this.textObj = 'Registration Page';
    }

    async render() {
        const title = this.createHeaderTitle(this.textObj);
        const registrForm = registration.build();
        const loginLink = createLink('#/login', 'Already registered? Sign in ', 'Here🔑', '');
        this._container.append(title, registrForm, loginLink);
        return this._container;
    }
}

export default RegistrPage;
