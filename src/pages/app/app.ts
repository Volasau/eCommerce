import MainPage from '../main/main';
import RegistrPage from '../logReg/registrationPage';
import Page from '../../core/template/page';
import LoginPage from '../logReg/loginPage';
import Header from '../../components/header';
import ErrorPage from '../error';
import { isLoggedIn } from '../../data/isLoggedIn';

export const enum PageIds {
    MainPage = 'main',
    RegistrPage = 'registr',
    LoginPage = 'login',
}

class App {
    private static container: HTMLElement = document.body;
    private static defaultPageId = 'current-page';
    private initialPage: MainPage;
    private header: Header;

    static renderNewPage(idPage: string) {
        const currentPageHTML = document.querySelector(`#${App.defaultPageId}`);
        if (currentPageHTML) {
            currentPageHTML.remove();
        }

        let page: Page | null = null;
        if (idPage === PageIds.MainPage) {
            page = new MainPage(idPage);
        } else if (idPage === PageIds.LoginPage) {
            page = new LoginPage(idPage);
        } else if (idPage === PageIds.RegistrPage) {
            page = new RegistrPage(idPage);
        } else {
            page = new ErrorPage(idPage, '404');
        }
        if (page) {
            const pageHTML = page.render();
            pageHTML.id = App.defaultPageId;
            App.container.append(pageHTML);
        }
    }

    private checkAuthenticationAndRedirect() {
        const hash = window.location.hash.slice(1);
        if (hash === PageIds.LoginPage) {
            if (isLoggedIn) {
                window.location.hash = PageIds.MainPage;
            }
        }
    }

    private enableRouteChange() {
        window.addEventListener('hashchange', () => {
            this.checkAuthenticationAndRedirect();
            const hash = window.location.hash.slice(1);
            App.renderNewPage(hash);
        });
    }

    constructor() {
        this.initialPage = new MainPage('main');
        this.header = new Header('header', 'header');
    }
    run() {
        App.container.append(this.header.render());

        App.renderNewPage('main');
        this.enableRouteChange();
    }
}

export default App;
