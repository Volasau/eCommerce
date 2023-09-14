import Page from '../../core/template/page';
import { createLink } from '../logReg/utils/createLink.utils';

class BasketPage extends Page {
    text: string;

    constructor(id: string) {
        super(id);
        this.text = 'Basket';
    }

    async render() {
        const title = this.createHeaderTitle(this.text);
        const catalog = createLink('#/catalog', 'To go to the catalog click here ', 'Catalog📦', '');
        this._container.append(title, catalog);
        return this._container;
    }
}

export default BasketPage;
