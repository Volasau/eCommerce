import fetch from 'node-fetch';
import App, { PageId } from '../pages/app/app';
import { constants } from '../data/constants';
import { showToast } from '../pages/logReg/utils/funcToastify.utils';
import { ICustomerResponse } from '../core/interfaces/customerResponse';
import { ILoginRequest } from '../core/interfaces/loginRequest';
import { ICustomerSignInResponse } from '../core/interfaces/customerSignInResponse';

export let dataCustomer: ICustomerResponse;

export class CustomerLogin {
    private apiUrlLogin: string;
    private bearerToken: string;

    constructor(apiUrlLogin: string, bearerToken: string) {
        this.apiUrlLogin = apiUrlLogin;
        this.bearerToken = bearerToken;
    }

    async loginUser(requestData: ILoginRequest) {
        try {
            const response = await fetch(this.apiUrlLogin, {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${this.bearerToken}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(requestData),
            });

            if (response.status === 200) {
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

            const data: ICustomerSignInResponse = await response.json();
            dataCustomer = data.customer;
            return data.customer.firstName;
        } catch (error) {
            if (error === '400') {
                console.error('Неверный логин или пароль');
            }
        }
    }
}
