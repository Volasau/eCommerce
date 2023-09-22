import { IBuilder } from '../interfaces/builder.interfaces';

class ElementBuilder implements IBuilder {
    private tag: string;

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
        const element = document.createElement(tag);
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
