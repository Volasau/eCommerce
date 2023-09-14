import Page from '../../core/template/page';
import '../../css/style.css';
// import { createLink } from '../logReg/utils/createLink.utils';

class MainPage extends Page {
    text: string;

    constructor(id: string) {
        super(id);
        this.text = 'HOME Page';
    }

    async render(): Promise<HTMLElement> {
        const title = this.createHeaderTitle(this.text);
        this._container.append(title);
        return this._container;
    }
}

export default MainPage;
