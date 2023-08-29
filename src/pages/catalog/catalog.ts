import Page from '../../core/template/page';
import '../../css/catalog.css';
import { categories } from '../../data/categoryObj';
import { createLink } from '../logReg/functions/createLink';
import { buildProductList } from './functions/buildProductList';
import { createFilterBlock } from './functions/filter/createFilterBlock';

class CatalogPage extends Page {
    static TextObject = {
        MainTitle: 'Catalog',
    };

    constructor(id: string) {
        super(id);
    }

    render() {
        const title = this.createHeaderTitle(CatalogPage.TextObject.MainTitle);
        const bodyCatolog = document.createElement('div');
        bodyCatolog.classList.add('product-card');

        const homeLink = createLink('#/main', 'To return to the home page click ', 'Here🏠', '');

        const filter = createFilterBlock(categories);
        this.container.append(filter, title, bodyCatolog, homeLink);

        this.container.style.position = 'relative';
        buildProductList(this.container);

        return this.container;
    }
}

export default CatalogPage;
