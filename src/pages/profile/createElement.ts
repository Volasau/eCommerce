export function createElement(tagName: string, classNames: string, innerHTML?: string): HTMLElement {
    const element = document.createElement(tagName);
    if (classNames) {
        if (Array.isArray(classNames)) {
            classNames.forEach((className) => element.classList.add(className));
        } else {
            element.classList.add(classNames);
        }
    }

    if (innerHTML) {
        element.innerHTML = innerHTML;
    }

    return element;
}
