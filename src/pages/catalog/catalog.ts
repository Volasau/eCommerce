import Page from '../../core/template/page';
import '../../css/catalog.css';
import { categoryStructuring } from '../../server/function/structureCategories';
import { createLink } from '../logReg/utils/createLink.utils';
import { CatalogRender } from './classes/catalogRenderClass';

class CatalogPage extends Page {
    textObject: string;

    constructor(id: string) {
        super(id);
        this.textObject = 'Catalog';
    }

    async render() {
        const categoryResponse = await categoryStructuring();
        const title = this.createHeaderTitle(this.textObject);
        const bodyCatalog = document.createElement('div');
        bodyCatalog.classList.add('product-card');

        const homeLink = createLink('#/main', 'To return to the home page click ', 'Here🏠', '');

        this._container.append(title, bodyCatalog, homeLink);

        const catalog = new CatalogRender(categoryResponse, title);
        catalog.renderCatalog();

        this._container.style.position = 'relative';

        return this._container;
    }
}

export default CatalogPage;
