import Page from '../../core/template/page';
import '../../css/catalog.css';
import { categoryStructuring } from '../../server/function/structureCategories';
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

        const link = createLink('#/main', 'To return to the home page click ', 'Here🏠', '');
        link.classList.add('footer');

        this._container.append(title, bodyCatalog, link);

        const catalog = new CatalogRender(categoryResponse, title, '');

        catalog.renderCatalog();

        this._container.style.position = 'relative';

        return this._container;
    }
}

export default CatalogPage;
