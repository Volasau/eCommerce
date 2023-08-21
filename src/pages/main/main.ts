import Page from '../../core/template/page';
import { createLink } from '../logReg/functions/createLink';
import '../../css/style.css';

class MainPage extends Page {
    static TextOject = {
        MainTitle: 'HOME Page',
    };
    constructor(id: string) {
        super(id);
    }

    render() {
        const title = this.createHeaderTitle(MainPage.TextOject.MainTitle);
        const registrLink = createLink('#registr', '', 'Registration➕', '');
        const loginLink = createLink('#login', '', 'Login🔑', '');
        const mainLink = createLink('#main', '', 'HOME', '');
        const logoutLink = createLink('#logout', '', 'Logout❌', 'logout__page');
        this.container.append(mainLink, loginLink, registrLink, logoutLink, title);
        return this.container;
    }
}

export default MainPage;
