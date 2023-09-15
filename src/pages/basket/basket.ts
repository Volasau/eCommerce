import Page from '../../core/template/page';
import { cartProducts } from '../../data/cartProducts';
import { createLink } from '../logReg/utils/createLink.utils';
import { createProductRow } from './utils/createProductRow';

class BasketPage extends Page {
    text: string;

    constructor(id: string) {
        super(id);
        this.text = 'Basket';
    }

    async render() {
        const title = this.createHeaderTitle(this.text);
        const catalog = createLink('#/catalog', 'To go to the catalog click here ', 'Catalog📦', '');
        this._container.append(title, createProductRow(cartProducts[0]), catalog);
        return this._container;
    }
}

export default BasketPage;
