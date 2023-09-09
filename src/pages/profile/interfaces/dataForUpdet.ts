interface INewAdress {
    country: string;
    city: string;
    street: string;
    code: string;
    billingDefault: boolean;
    shippingDefault: boolean;
    billing: boolean;
    shipping: boolean;
}

export const newAdress: INewAdress = {
    country: '',
    city: '',
    street: '',
    code: '',
    billingDefault: false,
    shippingDefault: false,
    billing: false,
    shipping: false,
};

export interface INewIformUser {
    email: string;
    firstName: string;
    lastName: string;
    birthDate: string;
}

export const newIformUser: INewIformUser = {
    email: '',
    firstName: '',
    lastName: '',
    birthDate: '',
};

interface IChangeAdress extends INewAdress {
    id: string;
}

export const changeAdress: IChangeAdress = {
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

interface IChangePassword {
    passwordOld: string;
    passwordNew: string;
}

export const changePassworObj: IChangePassword = {
    passwordOld: '',
    passwordNew: '',
};
