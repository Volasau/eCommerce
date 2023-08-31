import { bearer_token_pf } from '../validation/authorisationFunctions/logInToServer';
import { TokenRevoker } from '../../../server/logout';
import { showToast } from './funcToastify';
import App, { PageIds } from '../../app/app';
import { setIsLoggedIn } from '../../../data/isLoggedIn';

export const logoutAction = async () => {
    const tokenRevoker = new TokenRevoker();

    try {
        await tokenRevoker.revokeAccessToken(bearer_token_pf);
        showToast('You went out');
        const newUrl = window.location.href.replace(`#/${PageIds.LogoutPage}`, `#/${PageIds.LoginPage}`);
        window.history.replaceState({}, document.title, newUrl);
        App.renderNewPage(PageIds.LoginPage);
        const logoutBtn = document.querySelectorAll('.logout__page');
        logoutBtn.forEach((el) => {
            el.classList.remove('block');
        });
        const btnProfile = document.querySelector('.profile__page');
        if (btnProfile) {
            btnProfile.classList.remove('block');
        }

        setIsLoggedIn(false);
    } catch (error) {
        showToast('Problem');
        const hash = window.location.hash.slice(1);
        App.renderNewPage(hash);
    }
};
