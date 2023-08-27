import Page from '../../core/template/page';
import '../../css/catalog.css';
import { createLink } from '../logReg/functions/createLink';
import { divHTML, imgHTML } from './classes/elementBuilder';

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

        this.container.append(title, bodyCatolog, homeLink);

        this.container.style.position = 'relative';
        const h1 = this.container.querySelector('h1') as HTMLElement;
        console.log(h1);
        const product = divHTML.getElement('', 'f4fa932b-fb60-46ab-b8d4-a363d8727452', 'product min') as HTMLDivElement;
        const img = imgHTML.getElement(
            '',
            'f4fa932b-fb60-46ab-b8d4-a363d8727452-img',
            'product-img min',
            'https://83c548175751107cbc78-7e6ca5812cd490d87dba64b458c8c635.ssl.cf3.rackcdn.com/2-2-1Si2lfBl.jpg',
            'Lenovo Performance image',
            '130px'
        );
        const name = divHTML.getElement('Lenovo Performance', 'f4fa932b-fb60-46ab-b8d4-a363d8727452-name', 'name min');
        const price = divHTML.getElement('1599.00 GBP', 'f4fa932b-fb60-46ab-b8d4-a363d8727452-price', 'price min');
        const discription = divHTML.getElement(
            'discription',
            'f4fa932b-fb60-46ab-b8d4-a363d8727452-discription',
            'discription min'
        );
        product.append(img, name, price, discription);
        h1.after(product);

        return this.container;
    }
}

export default CatalogPage;
