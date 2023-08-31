import Page from '../../core/template/page';
import { createLink } from '../logReg/functions/createLink';

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

        const homeLink = createLink('#/main', 'To return to the home page click ', 'Here🏠', '');
        this.container.append(title, bodyProfile, homeLink);

        return this.container;
    }
}

export default ProfilePage;
