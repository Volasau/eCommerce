import Page from '../../core/template/page';
import '../../css/abaoutus.css';
// import { createLink } from '../logReg/utils/createLink.utils';
import { aboutInfo } from './data/infoAboutUs';
import CardRenderer from './formAboutUs';
import { createElement } from '../profile/createElement';
import { textDescription } from './data/infoDescription';
import rsslogo from '../../assets/images/RSS.png';
import { createLink } from '../logReg/utils/createLink.utils';

class AboutPage extends Page {
    text: string;

    constructor(id: string) {
        super(id);
        this.text = 'About US';
    }

    async render(): Promise<HTMLElement> {
        const title = this.createHeaderTitle(this.text);
        const basketLink = createLink('#/basket', '', 'Basket🧺', '');
        const containerInfo = createElement('div', 'aboutus__container');
        const linkSchool = createElement('p', 'link-school__container');
        const rssLink = document.createElement('a');
        rssLink.classList.add('rss__link');
        rssLink.href = `https://rs.school/index.html`;
        rssLink.target = '_blank';
        const rssIcon = document.createElement('img');
        rssIcon.classList.add('img__rss');
        rssIcon.src = rsslogo;
        rssIcon.alt = 'rsschool';
        rssLink.append(rssIcon);
        linkSchool.append(rssLink);

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

        containerInfo.append(
            linkSchool,
            introduction,
            paragraphOne,
            paragraphTwo,
            paragraphThree,
            conclusion,
            countriCards
        );
        // const catalog = createLink('#/catalog', 'To go to the catalog click here ', 'Catalog📦', '');
        this._container.append(basketLink, title, containerInfo);
        return this._container;
    }
}

export default AboutPage;
