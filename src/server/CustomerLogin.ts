import fetch from 'node-fetch';
import { ICustomerSignInResponse } from '../core/interfaces/CustomerSignInResponse';
import { ILoginRequest } from '../core/interfaces/LoginRequest';
import App, { PageIds } from '../pages/app/app';
import { setIsLoggedIn } from '../data/isLoggedIn';
import { showToast } from '../pages/logReg/functions/funcToastify';

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
                const newUrl = window.location.href.replace(`#/${PageIds.LoginPage}`, `#/${PageIds.MainPage}`);
                window.history.replaceState({}, document.title, newUrl);
                App.renderNewPage(PageIds.MainPage);
                const btnLogout = document.querySelectorAll('.logout__page');
                btnLogout.forEach((el) => {
                    el.classList.add('block');
                });
                setIsLoggedIn(true);
            }

            const data: ICustomerSignInResponse = await response.json();
            console.log('Response:', data.customer.firstName);
            return data.customer.firstName;
        } catch (error) {
            if (error === '400') {
                console.error('Неверный логин или пароль');
            }
        }
    }
}
