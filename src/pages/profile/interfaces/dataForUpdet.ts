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
