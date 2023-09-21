import Page from '../../core/template/page';
import '../../css/aboutUs.css';
import { aboutInfo } from './data/infoAboutUs';
import CardRenderer from './formAboutUs';
import { createElement } from '../profile/createElement';
import { textDescription } from './data/infoDescription';
import rssLogo from '../../assets/images/RSS.png';

class AboutPage extends Page {
    text: string;

    constructor(id: string) {
        super(id);
        this.text = 'About US';
    }

    render(): HTMLElement {
        const title = this.createHeaderTitle(this.text);
        const containerInfo = createElement('div', 'aboutus__container');
        const linkSchool = createElement('p', 'link-school__container');
        const rssLink = document.createElement('a');
        rssLink.classList.add('rss__link');
        rssLink.href = `https://rs.school/index.html`;
        rssLink.target = '_blank';
        const rssIcon = document.createElement('img');
        rssIcon.classList.add('img__rss');
        rssIcon.src = rssLogo;
        rssIcon.alt = 'rsschool';
        rssLink.append(rssIcon);
        linkSchool.append(rssLink);

        const countryCards: HTMLElement = createElement('div', 'container__cards');
        aboutInfo.forEach((info) => {
            const cardRenderer = new CardRenderer(countryCards, info);
            cardRenderer.render();
        });
        const paragraphs: HTMLElement[] = Object.values(textDescription).map((text) => {
            const paragraph = createElement('p', 'paragraph__conrtainer', text);
            return paragraph;
        });
        containerInfo.append(linkSchool, ...paragraphs, countryCards);
        this._container.append(title, containerInfo);
        return this._container;
    }
}

export default AboutPage;
