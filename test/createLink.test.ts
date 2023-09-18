import { createLink } from '../src/pages/logReg/utils/createLink.utils';

describe('createLink function', () => {
    it('should create a link element with  href', () => {
        const href = 'https://example.com';
        const goto = 'Go to Example';
        const text = 'Click Here';
        const customClass = 'class';

        const linkContainer = createLink(href, goto, text, customClass);

        expect(linkContainer.classList.contains('links__container')).toBe(true);

        const linkText = linkContainer.querySelector('p.text');
        expect(linkText).not.toBeNull();
        expect(linkText!.textContent).toBe(`${goto}${text}`);

        const link = linkContainer.querySelector('a.link');
        expect(link).not.toBeNull();
        expect(link!.getAttribute('href')).toBe(href);
        expect(link!.classList.contains('class')).toBe(true);
        expect(link!.innerHTML).toBe(text);
    });
});
