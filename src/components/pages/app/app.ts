class App {
    private container: HTMLElement;

    constructor() {
        this.container = document.body;
    }
    run() {
        this.container.innerText = 'RssTeamShop';
    }
}

export default App;
