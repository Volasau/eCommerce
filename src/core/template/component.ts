abstract class Component {
    protected _container: HTMLElement;

    constructor(tagName: string, className: string) {
        this._container = document.createElement(tagName);
        this._container.className = className;
    }

    render(): HTMLElement {
        return this._container;
    }
}

export default Component;
