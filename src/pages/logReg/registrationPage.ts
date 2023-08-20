import { IRegObj } from '../../core/interfaces/regObjInterface';
import Page from '../../core/template/page';
import { registration } from './formObjects/registrationObj';
import { submitData } from './validation/authorisationFunctions/submitData/submitData';

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
        countryShip: '',
        cityShip: '',
        streetShip: '',
        postcodeShip: '',
        billingDefault: false,
        shippingDefault: false,
    };

    constructor(id: string) {
        super(id);
    }

    render() {
        const title = this.createHeaderTitle(RegistrPage.TextOject.MainTitle);
        const registrForm = registration.build();
        this.container.append(title, registrForm);
        this.logInOrReg();
        return this.container;
    }

    logInOrReg() {
        submitData(this.container, this.regObj);
    }
}

export default RegistrPage;
