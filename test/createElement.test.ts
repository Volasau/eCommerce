import { createElement } from '../src/pages/profile/createElement';

describe('createElement function', () => {
    it('should create an HTML element with the specified tag name', () => {
        const tagName = 'div';
        const classNames = '';
        const element = createElement(tagName, classNames);
        expect(element.tagName.toLowerCase()).toBe(tagName);
    });

    it('should add the specified class__element names to the element', () => {
        const tagName = 'div';
        const classNames = 'class__element';
        const element = createElement(tagName, classNames);
        expect(element.classList.contains('class__element')).toBe(true);
    });

    it('should add  class__element names when classNames is an array', () => {
        const tagName = 'div';
        const classNames = 'class__element';
        const element = createElement(tagName, classNames);
        expect(element.classList.contains('class__element')).toBe(true);
    });

    it('should set the innerHTML of the element if provided', () => {
        const tagName = 'div';
        const classNames = 'class__element';
        const innerHTML = '<p>This is some inner HTML</p>';
        const element = createElement(tagName, classNames, innerHTML);
        expect(element.innerHTML).toBe(innerHTML);
    });

    it('should return an HTMLElement', () => {
        const tagName = 'div';
        const classNames = 'class__element';
        const element = createElement(tagName, classNames);
        expect(element instanceof HTMLElement).toBe(true);
    });
});
