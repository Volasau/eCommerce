import App, { PageId } from '../../pages/app/app';
import { constants } from '../../data/constants';
import { showToast } from '../../pages/logReg/utils/funcToastify.utils';
import { ICustomerResponse } from '../../core/interfaces/customerResponse.interfaces';
import { ILoginRequest } from '../../core/interfaces/loginRequest.interfaces';
import { ICustomerSignInResponse } from '../../core/interfaces/customerSignInResponse.interfaces';
import { request } from '../classes/requestClass';
import { PARSE } from '../interfaces/parseEnum';
import { Customer } from '@commercetools/platform-sdk';

export let dataCustomer: ICustomerResponse;

export class CustomerLogin {
    private bearerToken: string;

    constructor(bearerToken: string) {
        this.bearerToken = bearerToken;
    }

    async loginUser(requestData: ILoginRequest): Promise<Customer | undefined> {
        try {
            const auth = `Bearer ${this.bearerToken}`;
            const res: Response = await request.postAuth(
                constants.apiUrlLogin,
                auth,
                PARSE.Json,
                JSON.stringify(requestData)
            );

            if (res.status === 200) {
                showToast('You are logged in!');
                const newUrl: string = window.location.href.replace(`#/${PageId.LoginPage}`, `#/${PageId.MainPage}`);
                window.history.replaceState({}, document.title, newUrl);
                App.renderNewPage(PageId.MainPage);
                const btnLogout: NodeListOf<Element> = document.querySelectorAll('.logout__page');
                btnLogout.forEach((el) => {
                    el.classList.add('block');
                });
                const btnLogin: Element | null = document.querySelector('.login__page');
                btnLogin?.classList.add('none');
                const btnRegistr: Element | null = document.querySelector('.registr__page');
                btnRegistr?.classList.add('none');

                const btnProfile: Element | null = document.querySelector('.profile__page');
                if (btnProfile) {
                    btnProfile.classList.add('block');
                }
                constants.logIn = true;
            }

            const data: ICustomerSignInResponse = await res.json();
            dataCustomer = data.customer;
            return dataCustomer;
        } catch (error) {
            if (error === '400') {
                console.error('Неверный логин или пароль');
            }
        }
    }
}
