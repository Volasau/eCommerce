import { createLink } from '../../pages/logReg/utils/createLink.utils';
import { createElement } from '../../pages/profile/createElement';

abstract class Page {
    protected _container: HTMLElement;
    abstract text: string;
    abstract render(): Promise<HTMLElement> | HTMLElement;

    constructor(id: string) {
        this._container = document.createElement('div');
        this._container.id = id;
    }

    protected createHeaderTitle(text: string): HTMLElement {
        const headerContainer: HTMLElement = createElement('div', 'header__page');
        const basketLink = createLink('#/basket', '', 'Basket🧺', '');
        const aboutUsLink = createLink('#/aboutus', '', 'AboutUs👥', '');

        const headerTitle = document.createElement('h1');
        headerTitle.innerText = text;

        headerContainer.append(basketLink, aboutUsLink, headerTitle);
        return headerContainer;
    }
}

export default Page;
