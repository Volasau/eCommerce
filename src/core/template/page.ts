abstract class Page {
    protected _container: HTMLElement;
    abstract textObject: string;

    constructor(id: string) {
        this._container = document.createElement('div');
        this._container.id = id;
    }

    protected createHeaderTitle(text: string) {
        const headerTitle = document.createElement('h1');
        headerTitle.innerText = text;
        return headerTitle;
    }

    render() {
        return this._container;
    }
}

export default Page;
