import Page from '../../core/template/page';
import '../../css/catalog.css';
import { categoryResponse } from '../../data/categoryResponse';
import { createLink } from '../logReg/utils/createLink.utils';
import { CatalogRender } from './classes/catalogRenderClass';

class CatalogPage extends Page {
    textObject: string;

    constructor(id: string) {
        super(id);
        this.textObject = 'Catalog';
    }

    render() {
        const title = this.createHeaderTitle(this.textObject);
        const bodyCatolog = document.createElement('div');
        bodyCatolog.classList.add('product-card');

        const homeLink = createLink('#/main', 'To return to the home page click ', 'Here🏠', '');

        this._container.append(title, bodyCatolog, homeLink);

        const catalog = new CatalogRender(categoryResponse, title);
        catalog.renderCatalog();

        this._container.style.position = 'relative';

        return this._container;
    }
}

export default CatalogPage;
