import { IRegObj } from '../../core/interface/regObjInterface';
import Page from '../../core/template/page';
import { registration } from './formObjects/registrationObj';
import { submitData } from './validation/authorisationFunctions/submitData';

class RegistrPage extends Page {
    static TextOject = {
        MainTitle: 'Registration page',
    };
    protected regObj: IRegObj = {
        email: '',
        password: '',
        name: '',
        lastName: '',
        country: '',
        city: '',
        street: '',
        postcode: '',
        birthDate: '',
    };

    constructor(id: string) {
        super(id);
    }

    render() {
        const title = this.createHeaderTitle(RegistrPage.TextOject.MainTitle);
        const registrForm = registration.build();
        this.container.append(title, registrForm);
        this.autorisation();
        return this.container;
    }

    autorisation() {
        submitData(this.container, this.regObj);
    }
}

export default RegistrPage;
