import Page from '../../core/template/page';

class MainPage extends Page {
    static TextOject = {
        MainTitle: 'Catalog products',
    };
    constructor(id: string) {
        super(id);
    }

    render() {
        const title = this.createHeaderTitle(MainPage.TextOject.MainTitle);
        this.container.append(title);
        return this.container;
    }
}

export default MainPage;
