import Page from '../../core/template/page';
import { createLink } from '../logReg/functions/createLink';
import { dataCostomer } from '../../server/CustomerLogin';
import '../../css/profile.css';
import { renderAddresses } from './renderAdresses';
import { User } from './formUser';
import showChangePasswordWindow from './changePfssword';
import { AddressNew } from './formAddNewAdress';

class ProfilePage extends Page {
    static TextObject = {
        ProfilePage: 'Profile',
    };

    constructor(id: string) {
        super(id);
    }

    render() {
        const title = this.createHeaderTitle(ProfilePage.TextObject.ProfilePage);
        const bodyProfile = document.createElement('div');
        bodyProfile.classList.add('profile__container');
        const userContaner = document.createElement('div');
        userContaner.classList.add('userC__container');

        const userProfile = new User(
            dataCostomer.email,
            dataCostomer.firstName,
            dataCostomer.lastName,
            dataCostomer.dateOfBirth
        );

        userContaner.append(userProfile.container);

        const changePasswordButton = document.createElement('button');
        changePasswordButton.classList.add('btn__change-pass');
        changePasswordButton.textContent = 'Change Password';
        changePasswordButton.addEventListener('click', () => {
            changePasswordButton.disabled = true;
            showChangePasswordWindow(userContaner);
        });

        ////////////////////////////////////////////////////////////////////////////////////////////////

        const addressesContainer = document.createElement('div');
        addressesContainer.classList.add('adresAll__container');

        const addresses = renderAddresses(dataCostomer);

        const addAddressButton = document.createElement('button');
        addAddressButton.classList.add('btn__add-address');
        addAddressButton.textContent = 'Add Address';
        addAddressButton.addEventListener('click', () => {
            addAddressButton.disabled = true;
            const newAdressBlock = new AddressNew();
            addressesContainer.appendChild(newAdressBlock.container);
        });

        addressesContainer.append(addresses);
        bodyProfile.appendChild(userContaner);
        bodyProfile.appendChild(changePasswordButton);
        addressesContainer.appendChild(addAddressButton);
        bodyProfile.appendChild(addressesContainer);

        // console.log(newAdress);

        const homeLink = createLink('#/main', 'To return to the home page click ', 'Here🏠', '');
        this.container.append(title, bodyProfile, homeLink);
        console.log(dataCostomer);

        return this.container;
    }
}

export default ProfilePage;
