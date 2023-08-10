import Page from '../../templates/page';
import { createRegistrationForm } from './createForm';

class RegistrPage extends Page {
    static TextOject = {
        MainTitle: 'Registration page',
    };

    constructor(id: string) {
        super(id);
    }

    render() {
        const title = this.createHeaderTitle(RegistrPage.TextOject.MainTitle);
        const registrForm = createRegistrationForm();
        this.container.append(title, registrForm);
        return this.container;
    }
}

export default RegistrPage;
