import MainPage from '../main/main';
import LoginPage from '../logReg/loginPage';
import RegistrPage from '../logReg/registrationPage';

class App {
    private container: HTMLElement;
    private initialPage: MainPage;

    constructor() {
        this.container = document.body;
        this.initialPage = new MainPage('main');
        // this.initialPage = new LoginPage('login');
        // this.initialPage = new RegistrPage('registr');
    }
    run() {
        const mainPageHTML = this.initialPage.render();
        this.container.append(mainPageHTML);
    }
}

export default App;
