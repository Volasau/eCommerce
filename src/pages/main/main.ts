import Page from '../../core/template/page';
import '../../css/style.css';
import { createLink } from '../logReg/utils/createLink.utils';

class MainPage extends Page {
    text: string;

    constructor(id: string) {
        super(id);
        this.text = 'HOME Page';
    }

    async render(): Promise<HTMLElement> {
        const title = this.createHeaderTitle(this.text);
        const basketLink = createLink('#/basket', '', 'Basket🧺', '');
        const aboutUsLink = createLink('#/aboutus', '', 'AboutUs👥', '');
        this._container.append(basketLink, aboutUsLink, title);
        return this._container;
    }
}

export default MainPage;
