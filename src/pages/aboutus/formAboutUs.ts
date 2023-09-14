import { IAboutInfo } from './interface/interfaceInfo';
import iconGitHub from '../../assets/icons/github-logo.png';
import { createElement } from '../profile/createElement';

class CardRenderer {
    private container: HTMLElement;
    private data: IAboutInfo;

    constructor(container: HTMLElement, data: IAboutInfo) {
        this.container = container;
        this.data = data;
    }

    private createCard(): HTMLElement {
        const card = createElement('div', 'card__person');

        const image = document.createElement('img');
        image.classList.add('img__person');
        image.src = this.data.photo;
        image.alt = this.data.fistName;
        card.appendChild(image);

        const name = createElement('h2', 'title__name', this.data.fistName);
        card.appendChild(name);

        const githubLink = document.createElement('a');
        githubLink.classList.add('git__link');
        githubLink.href = this.data.linkGitHub;
        githubLink.target = '_blank';

        const githubIcon = document.createElement('img');
        githubIcon.classList.add('git__link-icon');
        githubIcon.src = iconGitHub;
        githubIcon.alt = 'GitHub Logo';

        githubLink.appendChild(githubIcon);
        githubLink.appendChild(document.createTextNode(' GitHub'));
        card.appendChild(githubLink);

        const role = createElement('p', 'role__container', this.data.role);
        card.appendChild(role);

        const description = createElement('p', 'description__container', this.data.description);
        card.appendChild(description);

        return card;
    }

    render(): void {
        const card = this.createCard();
        this.container.appendChild(card);
    }
}

export default CardRenderer;
