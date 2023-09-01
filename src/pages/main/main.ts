import Page from '../../core/template/page';
import '../../css/style.css';
import { createLink } from '../logReg/utils/createLink.utils';

class MainPage extends Page {
    textObject: string;

    constructor(id: string) {
        super(id);
        this.textObject = 'HOME Page';
    }

    render() {
        const title = this.createHeaderTitle(this.textObject);
        const registrLink = createLink('#/registr', '', 'Registration➕', '');
        const loginLink = createLink('#/login', '', 'Login🔑', '');
        const logoutLink = createLink('#/logout', '', 'Logout❌', 'logout__page');
        this._container.append(loginLink, registrLink, logoutLink, title);
        return this._container;
    }
}

export default MainPage;
