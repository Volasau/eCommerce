import Page from '../../core/template/page';
import '../../css/profile.css';
import { renderAddresses } from './renderAdresses';
import { User } from './formUser';
import { dataCustomer as customer } from '../../server/customerLogin';
import { createLink } from '../logReg/utils/createLink.utils';
import { buttonHTML, divHTML } from '../catalog/classes/elementBuilder';
import { addBlock } from './listeners/addBlock';

export default class ProfilePage extends Page {
    text: string;

    constructor(id: string) {
        super(id);
        this.text = 'Profile';
    }

    async render(): Promise<HTMLElement> {
        const text = 'After any changes, you must login again!';
        const title = this.createHeaderTitle(this.text);
        const textInfo = divHTML.getElement(text, 'txt-info', 'text__information');
        const bodyProfile = divHTML.getElement('', 'profile__cont', 'profile__container');
        const userContainer = divHTML.getElement('', 'userC', 'userC__container');
        const passwordContainer = divHTML.getElement('', 'passw__cont', 'password__container');
        const addressesContainer = divHTML.getElement('', 'address-all', 'adresAll__container');
        const changePasswordButton = buttonHTML.getElement('Change Password 🔑', 'btn_ch', 'btn__change-pass');
        const addAddressButton = buttonHTML.getElement('Add Address📬', 'btn_ad', 'btn__add-address');
        const addresses = renderAddresses(customer);

        const userProfile = new User(customer.email, customer.firstName, customer.lastName, customer.dateOfBirth);
        userContainer.append(userProfile.container);

        addBlock(changePasswordButton, passwordContainer);
        addBlock(addAddressButton, addressesContainer);

        addressesContainer.append(addresses, addAddressButton);
        passwordContainer.append(changePasswordButton);
        bodyProfile.append(userContainer, passwordContainer, addressesContainer);

        const homeLink = createLink('#/main', 'To return to the home page click ', 'Here🏠', '');
        this._container.append(title, textInfo, bodyProfile, homeLink);

        return this._container;
    }
}
