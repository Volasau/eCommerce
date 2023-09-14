import Component from '../../core/template/component';
import App, { PageId } from '../../pages/app/app';
import '../../css/header.css';
import logo from '../../assets/images/logo.jpg';
import { constants } from '../../data/constants';

const Buttons = [
    {
        id: PageId.MainPage,
        text: '',
        class: 'mane__page',
        logoImage: logo,
    },
    {
        id: PageId.MainPage,
        text: 'HOME🏠',
        class: 'home__page',
    },
    {
        id: PageId.CatalogPage,
        text: 'Catalog📦',
        class: 'catalog__page',
    },
    {
        id: PageId.BasketPage,
        text: 'Basket🧺',
        class: 'basket__page',
    },
    {
        id: PageId.LoginPage,
        text: 'Login🔑',
        class: 'login__page',
    },
    {
        id: PageId.RegistrPage,
        text: 'Registration➕',
        class: 'registr__page',
    },
    {
        id: PageId.LogoutPage,
        text: 'Logout❌',
        class: 'logout__page',
    },
    {
        id: PageId.ProfilePage,
        text: 'Profile👤',
        class: 'profile__page',
    },
    {
        id: PageId.AboutPage,
        text: 'AboutUs👥',
        class: 'about__page',
    },
];

class Header extends Component {
    constructor(tagName: string, className: string) {
        super(tagName, className);
    }

    renderPageButtons(): void {
        const pageButtons = document.createElement('div');
        pageButtons.classList.add('header-container');
        Buttons.forEach((button) => {
            const buttonHTML = document.createElement('a');
            if (button.logoImage) {
                const logoImg = document.createElement('img');
                logoImg.src = button.logoImage;
                logoImg.classList.add('logo-image');
                buttonHTML.appendChild(logoImg);
            } else {
                buttonHTML.innerText = button.text;
            }
            buttonHTML.classList.add('but__link', `${button.class}`);
            buttonHTML.href = `#/${button.id}`;
            pageButtons.append(buttonHTML);
        });
        this._container.append(pageButtons);
    }

    async handleButtonClick(pageId: PageId): Promise<void> {
        if (pageId === PageId.LogoutPage) {
            const logoutBtn = document.querySelector('.logout__page');
            constants.logIn = false;
            logoutBtn?.classList.remove('block');
            await App.renderNewPage(PageId.LoginPage);
        } else {
            await App.renderNewPage(pageId);
        }
    }

    render(): HTMLElement {
        this.renderPageButtons();
        return this._container;
    }
}

export default Header;
