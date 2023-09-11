import { IBuilder } from '../interfaces/builderInterface';

class ElementBuilder implements IBuilder {
    tag: string;

    constructor(tag: string) {
        this.tag = tag;
    }

    getElement(
        text: string,
        id: string,
        klas: string,
        url?: string,
        alt?: string,
        w?: string,
        tag: string = this.tag
    ): HTMLElement {
        let element = document.createElement(tag);
        if (tag === 'div') {
            element = element as HTMLDivElement;
        } else if (tag === 'button') {
            element = element as HTMLButtonElement;
        } else if (tag === 'input') {
            element = element as HTMLInputElement;
        } else if (tag === 'img') {
            element = element as HTMLImageElement;
        }
        element.setAttribute('id', id);
        element.setAttribute('class', klas);
        if (url) element.setAttribute('src', url);
        if (alt) element.setAttribute('alt', alt);
        if (w) element.setAttribute('width', w);
        element.textContent = text;
        return element;
    }
}

export const buttonHTML = new ElementBuilder('button');
export const divHTML = new ElementBuilder('div');
export const inpHTML = new ElementBuilder('input');
export const imgHTML = new ElementBuilder('img');
export const selectHTML = new ElementBuilder('select');
export const spanHTML = new ElementBuilder('span');
export const formHTML = new ElementBuilder('form');
