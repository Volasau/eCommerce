import { IChangeAddress } from './changeAddressInterface';
import { IChangePassword } from './changePasswordInterface';
import { INewAddress } from './newAddressInterface';
import { INewInformUser } from './newInFormUserInterface';

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
