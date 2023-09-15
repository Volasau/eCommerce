import Page from '../../core/template/page';
import '../../css/catalog.css';
import { createCart } from '../../server/cart/createCart';
import { categoryStructuring } from '../../server/function/structureCategories';
import { createAnonymousToken } from '../../server/token/accessTokenAS';
import { createLink } from '../logReg/utils/createLink.utils';
import { CatalogRender } from './classes/catalogRenderClass';

class CatalogPage extends Page {
    text: string;

    constructor(id: string) {
        super(id);
        this.text = 'Catalog';
    }

    async render(): Promise<HTMLElement> {
        const categoryResponse = await categoryStructuring();
        const title = this.createHeaderTitle(this.text);
        const bodyCatalog = document.createElement('div');
        bodyCatalog.classList.add('product-card');

        const homeLink = createLink('#/main', 'To return to the home page click ', 'Here🏠', '');

        this._container.append(title, bodyCatalog, homeLink);

        const catalog = new CatalogRender(categoryResponse, title, '');
        if (localStorage.getItem('anonymousToken') === null) {
            (async () => {
                await createAnonymousToken();
            })();
        }
        if (localStorage.getItem('newCartId') === null) {
            setTimeout(async () => {
                await createCart();
            }, 50);
        }

        catalog.renderCatalog();

        this._container.style.position = 'relative';

        return this._container;
    }
}

export default CatalogPage;
