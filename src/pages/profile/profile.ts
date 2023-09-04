import Page from '../../core/template/page';
import '../../css/profile.css';
import { renderAddresses } from './renderAdresses';
import { User } from './formUser';
import { ChangePassword } from './changePassword';
import { AddressNew } from './formAddNewAdress';
import { dataCustomer } from '../../server/customerLogin';
import { createLink } from '../logReg/utils/createLink.utils';

class ProfilePage extends Page {
    textObject: string;

    constructor(id: string) {
        super(id);
        this.textObject = 'Profile';
    }

    async render() {
        const title = this.createHeaderTitle(this.textObject);
        const bodyProfile = document.createElement('div');
        bodyProfile.classList.add('profile__container');
        const userContaner = document.createElement('div');
        userContaner.classList.add('userC__container');

        const userProfile = new User(
            dataCustomer.email,
            dataCustomer.firstName,
            dataCustomer.lastName,
            dataCustomer.dateOfBirth
        );

        userContaner.append(userProfile.container);

        const passwordContainer = document.createElement('div');
        passwordContainer.classList.add('password__container');

        const changePasswordButton = document.createElement('button');
        changePasswordButton.classList.add('btn__change-pass');
        changePasswordButton.textContent = 'Change Password 🔑';
        changePasswordButton.addEventListener('click', () => {
            changePasswordButton.disabled = true;
            const changePassword = new ChangePassword();
            passwordContainer.appendChild(changePassword.container);
        });

        ////////////////////////////////////////////////////////////////////////////////////////////////

        const addressesContainer = document.createElement('div');
        addressesContainer.classList.add('adresAll__container');

        const addresses = renderAddresses(dataCustomer);

        const addAddressButton = document.createElement('button');
        addAddressButton.classList.add('btn__add-address');
        addAddressButton.textContent = 'Add Address📬';
        addAddressButton.addEventListener('click', () => {
            addAddressButton.disabled = true;
            const newAdressBlock = new AddressNew();
            addressesContainer.appendChild(newAdressBlock.container);
        });

        addressesContainer.append(addresses);
        bodyProfile.appendChild(userContaner);
        passwordContainer.appendChild(changePasswordButton);
        bodyProfile.appendChild(passwordContainer);
        addressesContainer.appendChild(addAddressButton);
        bodyProfile.appendChild(addressesContainer);

        const homeLink = createLink('#/main', 'To return to the home page click ', 'Here🏠', '');
        this._container.append(title, bodyProfile, homeLink);
        console.log(dataCustomer);

        return this._container;
    }
}

export default ProfilePage;
