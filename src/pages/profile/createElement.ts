export function createElement(tagName: string, classNames: string, innerHTML?: string): HTMLElement {
    const element = document.createElement(tagName);
    element.classList.add(classNames);
    if (innerHTML) {
        element.innerHTML = innerHTML;
    }
    return element;
}
