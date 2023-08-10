import Page from '../../core/template/page';
import { registration } from './formObjects/registrationObj';

class RegistrPage extends Page {
    static TextOject = {
        MainTitle: 'Registration page',
    };

    constructor(id: string) {
        super(id);
    }

    render() {
        const title = this.createHeaderTitle(RegistrPage.TextOject.MainTitle);
        const registrForm = registration.build();
        this.container.append(title, registrForm);
        return this.container;
    }
}

export default RegistrPage;
