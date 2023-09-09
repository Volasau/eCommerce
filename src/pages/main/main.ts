import Page from '../../core/template/page';
import '../../css/style.css';
import { createLink } from '../logReg/utils/createLink.utils';

class MainPage extends Page {
    textObj: string;

    constructor(id: string) {
        super(id);
        this.textObj = 'HOME Page';
    }

    async render() {
        const title = this.createHeaderTitle(this.textObj);
        const registrLink = createLink('#/registr', '', 'Registration➕', '');
        const loginLink = createLink('#/login', '', 'Login🔑', '');
        const logoutLink = createLink('#/logout', '', 'Logout❌', 'logout__page');
        this._container.append(loginLink, registrLink, logoutLink, title);
        return this._container;
    }
}

export default MainPage;
