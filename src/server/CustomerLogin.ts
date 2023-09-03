import fetch from 'node-fetch';
import { ICustomerSignInResponse } from '../core/interfaces/CustomerSignInResponse';
import { ILoginRequest } from '../core/interfaces/LoginRequest';
import App, { PageId } from '../pages/app/app';
import { ICustomerResponse } from '../core/interfaces/CustomerResponse';
import { constants } from '../data/constants';
import { showToast } from '../pages/logReg/utils/funcToastify.utils';

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

            if (!response.ok) {
                console.log('Login error');
            }

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
            console.log('Response:', data.customer.firstName);
            console.log('Response:', data.customer);
            dataCustomer = data.customer;
            return data.customer.firstName;
        } catch (error) {
            if (error === '400') {
                console.error('Неверный логин или пароль');
            }
        }
    }
}
