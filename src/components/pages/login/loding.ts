import Page from '../../templates/page';

class LoginPage extends Page {
    static TextObject = {
        MainTitle: 'Login Page',
    };

    constructor(id: string) {
        super(id);
    }

    render() {
        const title = this.createHeaderTitle(LoginPage.TextObject.MainTitle);

        this.container.append(title);
        return this.container;
    }
}

export default LoginPage;
