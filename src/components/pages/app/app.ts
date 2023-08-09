import MainPage from '../main/main';
import LoginPage from '../login/loding';

class App {
    private container: HTMLElement;
    private initialPage: MainPage;

    constructor() {
        this.container = document.body;
        // this.initialPage = new MainPage('main');
        this.initialPage = new LoginPage('login');
    }
    run() {
        const mainPageHTML = this.initialPage.render();
        this.container.append(mainPageHTML);
    }
}

export default App;
