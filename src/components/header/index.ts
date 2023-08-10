import Component from '../../core/template/components';
import { PageIds } from '../../pages/app/app';

const Buttons = [
    {
        id: PageIds.MainPage,
        text: 'Main Page',
    },
    {
        id: PageIds.LoginPage,
        text: 'Login',
    },
    {
        id: PageIds.RegistrPage,
        text: 'Registration',
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
            buttonHTML.href = `#${button.id}`;
            buttonHTML.innerText = button.text;
            pageButtons.append(buttonHTML);
        });
        this.container.append(pageButtons);
    }

    render() {
        this.renderPageButtons();
        return this.container;
    }
}

export default Header;
