import Page from '../../core/template/page';
import '../../css/style.css';
import { createPromoWindow } from '../basket/utils/createPromoWindow';
// import { createLink } from '../logReg/utils/createLink.utils';

class MainPage extends Page {
    text: string;

    constructor(id: string) {
        super(id);
        this.text = 'WELCOME TO OUR ONLINE STORE';
    }

    async render(): Promise<HTMLElement> {
        const title = this.createHeaderTitle(this.text);
        this._container.append(title, await createPromoWindow());
        this._container.classList.add('main__page');
        return this._container;
    }
}

export default MainPage;
