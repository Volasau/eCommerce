import Page from '../../core/template/page';
import '../../css/style.css';
import { createPromoWindow } from '../basket/utils/createPromoWindow.utils';

class MainPage extends Page {
    private readonly text: string = 'WELCOME TO OUR ONLINE STORE';

    constructor(id: string) {
        super(id);
    }

    async render(): Promise<HTMLElement> {
        const title = this.createHeaderTitle(this.text);
        this._container.append(title, await createPromoWindow());
        this._container.classList.add('main__page');
        return this._container;
    }
}

export default MainPage;
