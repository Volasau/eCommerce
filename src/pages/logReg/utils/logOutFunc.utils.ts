import { TokenRevoker } from '../../../server/logout';
import { showToast } from './funcToastify.utils';
import App, { PageId } from '../../app/app';
import { bearer_token_pf } from '../validation/authorizationFunctions/logInToServer';
import { constants } from '../../../data/constants';

export const logoutAction = async () => {
    const tokenRevoker = new TokenRevoker();

    try {
        await tokenRevoker.revokeAccessToken(bearer_token_pf);
        showToast('You went out');
        const newUrl = window.location.href.replace(`#/${PageId.LogoutPage}`, `#/${PageId.LoginPage}`);
        window.history.replaceState({}, document.title, newUrl);
        App.renderNewPage(PageId.LoginPage);
        const logoutBtn = document.querySelectorAll('.logout__page');
        logoutBtn.forEach((el) => {
            el.classList.remove('block');
        });
        const btnProfile = document.querySelector('.profile__page');
        if (btnProfile) {
            btnProfile.classList.remove('block');
        }

        constants.logIn = false;
    } catch (error) {
        showToast('Problem');
        const hash = window.location.hash.slice(1);
        App.renderNewPage(hash);
    }
};
