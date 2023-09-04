// интерфейс и объект для нового адресса

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
// интерфейс и объект для смены личной информации

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
///  интерфейс и объект для удаления адреса

// interface IIdAddressDelete {
//     id: string;
// }
// export const idAddressDelete: IIdAddressDelete = {
//     id: '',
// };
// интерфейс взят для нового адреса и объект для редоктирования адреса

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

// интерфейс для нового пароля

interface IChangePassword {
    passwordOld: string;
    passwordNew: string;
}

export const changePassworObj: IChangePassword = {
    passwordOld: '',
    passwordNew: '',
};
