import App, { PageId } from '../pages/app/app';
import { constants } from '../data/constants';
import { showToast } from '../pages/logReg/utils/funcToastify.utils';
import { ICustomerResponse } from '../core/interfaces/customerResponse';
import { ILoginRequest } from '../core/interfaces/loginRequest';
import { ICustomerSignInResponse } from '../core/interfaces/customerSignInResponse';
import { request } from './classes/requestClass';
import { PARSE } from './interfaces/parseEnum';

export let dataCustomer: ICustomerResponse;

export class CustomerLogin {
    private bearerToken: string;

    constructor(bearerToken: string) {
        this.bearerToken = bearerToken;
    }

    async loginUser(requestData: ILoginRequest) {
        try {
            const auth = `Bearer ${this.bearerToken}`;
            const res = await request.postAuth(constants.apiUrlLogin, auth, PARSE.Json, JSON.stringify(requestData));

            if (res.status === 200) {
                showToast('You are logged in!');
                const newUrl = window.location.href.replace(`#/${PageId.LoginPage}`, `#/${PageId.MainPage}`);
                window.history.replaceState({}, document.title, newUrl);
                App.renderNewPage(PageId.MainPage);
                const btnLogout = document.querySelectorAll('.logout__page');
                btnLogout.forEach((el) => {
                    el.classList.add('block');
                });

                const btnProfile = document.querySelector('.profile__page');
                if (btnProfile) {
                    btnProfile.classList.add('block');
                }
                constants.logIn = true;
            }

            const data: ICustomerSignInResponse = await res.json();
            dataCustomer = data.customer;
            return data.customer.firstName;
        } catch (error) {
            if (error === '400') {
                console.error('Неверный логин или пароль');
            }
        }
    }
}
