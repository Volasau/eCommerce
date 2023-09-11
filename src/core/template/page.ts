abstract class Page {
    protected _container: HTMLElement;
    abstract text: string;

    constructor(id: string) {
        this._container = document.createElement('div');
        this._container.id = id;
    }

    protected createHeaderTitle(text: string): HTMLHeadingElement {
        const headerTitle = document.createElement('h1');
        headerTitle.innerText = text;
        return headerTitle;
    }

    render(): Promise<HTMLElement> {
        return Promise.resolve(this._container);
    }
}

export default Page;
