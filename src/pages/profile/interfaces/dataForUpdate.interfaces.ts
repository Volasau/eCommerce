import { IChangeAddress } from './changeAddress.interfaces';
import { IChangePassword } from './changePassword.interfaces';
import { INewAddress } from './newAddress.interfaces';
import { INewInformUser } from './newInFormUser.interfaces';

export const newAddress: INewAddress = {
    country: '',
    city: '',
    street: '',
    code: '',
    billingDefault: false,
    shippingDefault: false,
    billing: false,
    shipping: false,
};

export const newInformUser: INewInformUser = {
    email: '',
    firstName: '',
    lastName: '',
    birthDate: '',
};

export const changeAddress: IChangeAddress = {
    id: '',
    country: '',
    city: '',
    street: '',
    code: '',
    billingDefault: false,
    shippingDefault: false,
    billing: false,
    shipping: false,
};

export const passwordChanger: IChangePassword = {
    passwordOld: '',
    passwordNew: '',
};
