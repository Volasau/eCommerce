import MainPage from '../main/main';
import RegistrPage from '../logReg/registrationPage';
import Page from '../../core/template/page';
import LoginPage from '../logReg/loginPage';
import Header from '../../components/header/header';
import ErrorPage from '../error/error';
import CatalogPage from '../catalog/catalog';
import ProfilePage from '../profile/profile';
import { constants } from '../../data/constants';
import { logoutAction } from '../logReg/utils/logOutFunc.utils';
import { routeProductPage } from '../catalog/listeners/routeProductPage';
import AboutPage from '../aboutus/aboutUs';

export const enum PageId {
    MainPage = 'main',
    CatalogPage = 'catalog',
    RegistrPage = 'registr',
    LoginPage = 'login',
    LogoutPage = 'logout',
    ProfilePage = 'profile',
    AboutPage = 'about',
}
class App {
    private static container: HTMLElement = document.body;
    private static defaultPageId = 'current-page';
    private initialPage: MainPage;
    private header: Header;

    constructor() {
        this.initialPage = new MainPage('main');
        this.header = new Header('header', 'header');
    }

    static async renderNewPage(idPage: string): Promise<void> {
        const currentPageHTML = document.querySelector(`#${App.defaultPageId}`);
        if (currentPageHTML) {
            currentPageHTML.remove();
        }

        let page: Page | null = null;
        switch (idPage) {
            case PageId.MainPage:
                page = new MainPage(idPage);
                break;
            case PageId.AboutPage:
                page = new AboutPage(idPage);
                break;
            case PageId.CatalogPage:
                page = new CatalogPage(idPage);
                break;
            case PageId.LoginPage:
                page = new LoginPage(idPage);
                break;
            case PageId.RegistrPage:
                page = new RegistrPage(idPage);
                break;
            case PageId.LogoutPage:
                if (document.querySelector('a.logout__page.block')) {
                    await logoutAction();
                } else {
                    page = new MainPage(idPage);
                }
                break;
            case PageId.ProfilePage:
                if (document.querySelector('a.profile__page.block')) {
                    page = new ProfilePage(idPage);
                } else {
                    page = new LoginPage(idPage);
                }
                break;
            default:
                page = new ErrorPage(idPage, '404');
        }

        if (page) {
            const pageHTML = await page.render();
            pageHTML.id = App.defaultPageId;
            App.container.append(pageHTML);
        }
    }

    private checkAuthenticationAndRedirect(): void {
        const hash = window.location.hash.slice(2);
        if (hash === PageId.LoginPage) {
            if (constants.logIn) {
                window.location.hash = `/${PageId.MainPage}`;
            }
        }
    }

    private async enableRouteChange(): Promise<void> {
        window.addEventListener('hashchange', async () => {
            this.checkAuthenticationAndRedirect();
            const hash1 = window.location.hash;
            if (hash1.split('/').length > 2) {
                routeProductPage(hash1);
            } else {
                const hash2 = window.location.hash.slice(2);
                await App.renderNewPage(hash2);
            }
        });
    }

    async run(): Promise<void> {
        App.container.append(this.header.render());

        await App.renderNewPage('main');
        this.enableRouteChange();
    }
}

export default App;
