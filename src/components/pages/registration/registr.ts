import Page from '../../templates/page';

class RegistrPage extends Page {
    static TextOject = {
        MainTitle: 'Registration page',
    };

    constructor(id: string) {
        super(id);
    }

    render() {
        const title = this.createHeaderTitle(RegistrPage.TextOject.MainTitle);
        this.container.append(title);
        return this.container;
    }
}

export default RegistrPage;
