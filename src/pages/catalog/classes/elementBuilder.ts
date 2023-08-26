import { IBuilder } from '../interfaces/builderInterface';

class ElementBuilder implements IBuilder {
    tag: string;

    constructor(tag: string) {
        this.tag = tag;
    }

    getElement(text: string, id: string, klass: string, tag: string = this.tag) {
        let element = document.createElement(tag);
        if (tag === 'div') {
            element = element as HTMLDivElement;
        } else if (tag === 'button') {
            element = element as HTMLButtonElement;
        } else {
            element = element as HTMLImageElement;
        }
        element.setAttribute('id', id);
        element.setAttribute('class', klass);
        element.textContent = text;
        return element;
    }
}

export const buttonHTML = new ElementBuilder('button');
export const divHTML = new ElementBuilder('div');
export const inpHTML = new ElementBuilder('input');
