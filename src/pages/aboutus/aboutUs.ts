import Page from '../../core/template/page';
import '../../css/abaoutus.css';
// import { createLink } from '../logReg/utils/createLink.utils';
import { aboutInfo } from './data/infoAboutUs';
import CardRenderer from './formAboutUs';
import { createElement } from '../profile/createElement';
import { textDescription } from './data/infoDescription';

class AboutPage extends Page {
    text: string;

    constructor(id: string) {
        super(id);
        this.text = 'About US';
    }

    async render(): Promise<HTMLElement> {
        const title = this.createHeaderTitle(this.text);
        const containerInfo = createElement('div', 'aboutus__container');

        const countriCards = createElement('div', 'container__cards');
        aboutInfo.forEach((info) => {
            const cardRenderer = new CardRenderer(countriCards, info);
            cardRenderer.render();
        });
        const introduction = createElement('p', 'paragraph__conrtainer', textDescription.introduction);
        const paragraphOne = createElement('p', 'paragraph__conrtainer', textDescription.paragraphOne);
        const paragraphTwo = createElement('p', 'paragraph__conrtainer', textDescription.paragraphTwo);
        const paragraphThree = createElement('p', 'paragraph__conrtainer', textDescription.paragraphThree);
        const conclusion = createElement('p', 'paragraph__conrtainer', textDescription.conclusion);

        containerInfo.append(introduction, paragraphOne, paragraphTwo, paragraphThree, conclusion, countriCards);
        // const catalog = createLink('#/catalog', 'To go to the catalog click here ', 'Catalog📦', '');
        this._container.append(title, containerInfo);
        return this._container;
    }
}

export default AboutPage;
