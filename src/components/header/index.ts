import Component from '../../core/template/components';
import App, { PageIds } from '../../pages/app/app';
import '../../css/header.css';
import { setIsLoggedIn } from '../../data/isLoggedIn';
import logo from '../../assets/images/logo.jpg';

const Buttons = [
    {
        id: PageIds.MainPage,
        text: '',
        class: 'mane__page',
        logoImage: logo,
    },
    {
        id: PageIds.MainPage,
        text: 'HOME🏠',
        class: 'home__page',
    },
    {
        id: PageIds.CatalogPage,
        text: 'Catalog📦',
        class: 'catalog__page',
    },
    {
        id: PageIds.LoginPage,
        text: 'Login🔑',
        class: 'login__page',
    },
    {
        id: PageIds.RegistrPage,
        text: 'Registration➕',
        class: 'registr__page',
    },
    {
        id: PageIds.LogoutPage,
        text: 'Logout❌',
        class: 'logout__page',
    },
];

class Header extends Component {
    constructor(tagName: string, className: string) {
        super(tagName, className);
    }

    renderPageButtons() {
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
        this.container.append(pageButtons);
    }

    handleButtonClick(pageId: PageIds) {
        if (pageId === PageIds.LogoutPage) {
            const logoutBtn = document.querySelector('.logout__page');
            setIsLoggedIn(false);
            logoutBtn?.classList.remove('block');
            App.renderNewPage(PageIds.LoginPage);
        } else {
            App.renderNewPage(pageId);
        }
    }

    render() {
        this.renderPageButtons();
        return this.container;
    }
}

export default Header;
