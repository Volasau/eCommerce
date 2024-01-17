import { IConstants } from '../core/interfaces/constants.interfaces';

export const constants: IConstants = {
    page: 0,
    logIn: false,
    shipDefault: false,
    billDefault: false,
    baseURL: 'https://api.europe-west1.gcp.commercetools.com/electronics/product-projections/search',
    apiUrl: 'https://api.europe-west1.gcp.commercetools.com/electronics',
    apiUrlCarts: 'https://api.europe-west1.gcp.commercetools.com/electronics/carts',
    apiUrlLogin: 'https://api.europe-west1.gcp.commercetools.com/electronics/login',
    apiUrlCustomers: 'https://api.europe-west1.gcp.commercetools.com/electronics/customers',
    authHost: 'auth.europe-west1.gcp.commercetools.com',
    cartID: '',
    client_id: 'NdpyWuACe8TAnLsXKNa-744Y',
    client_secret: 'nisqSFMeYQZ0-xz7_qy3L5xeTUhWH8r4',
    authHeader: `Basic ${Buffer.from('NdpyWuACe8TAnLsXKNa-744Y:nisqSFMeYQZ0-xz7_qy3L5xeTUhWH8r4').toString('base64')}`,
    authURL: 'https://auth.europe-west1.gcp.commercetools.com/oauth/token',
    tokenUrl: `https://auth.europe-west1.gcp.commercetools.com/oauth/electronics/customers/token`,
    anonymousTokenUrl: `https://auth.europe-west1.gcp.commercetools.com/oauth/electronics/anonymous/token`,
    revokeUrl: `https://auth.europe-west1.gcp.commercetools.com/oauth/token/revoke`,
    categoryEndpoint: 'https://api.commercetools.com/electronics/categories',
    productsEndpoint: 'https://api.europe-west1.gcp.commercetools.com/electronics/products?limit=60',
    meCartEndpoint: 'https://api.europe-west1.gcp.commercetools.com/electronics/me/carts',
    projectKey: 'electronics',
    scope: 'manage_project:electronics',
    requestDataCart: {
        currency: 'GBP',
    },
    registration: {
        email: '',
        password: '',
        name: '',
        lastName: '',
        country: '',
        city: '',
        street: '',
        postcode: '',
        birthDate: '',
        countryShip: '',
        cityShip: '',
        streetShip: '',
        postcodeShip: '',
        billingDefault: false,
        shippingDefault: false,
    },
    authorization: { email: '', password: '' },
    modalPage: 1,
    modalImages: [
        'https://83c548175751107cbc78-7e6ca5812cd490d87dba64b458c8c635.ssl.cf3.rackcdn.com/2-2-1Si2lfBl.jpg',
        'https://83c548175751107cbc78-7e6ca5812cd490d87dba64b458c8c635.ssl.cf3.rackcdn.com/1-1-dIU7YJe-.jpg',
        'https://83c548175751107cbc78-7e6ca5812cd490d87dba64b458c8c635.ssl.cf3.rackcdn.com/3-1-K1lyGYmZ.jpg',
    ],
    productList: [
        {
            name: 'Philips HD9339/80',
            description:
                'The transparent flask makes the Philips HD9339/80 electric kettle very beautiful and easy to use. On both sides, marks are applied to it, which allow you to choose the optimal amount of water in liters or cups. When the power is turned on, it is illuminated from the inside with a pale blue color.\n\nONLY QUALITY MATERIALS\nThe teapot is made of stainless steel and tempered glass. These durable materials are practical and safe - they are easily cleaned of scale and do not emit harmful substances. The water in the device retains its natural taste and beneficial properties.\n\nMULTI-STAGE SAFETY SYSTEM\nElectronics takes care of the durability of the kettle. It turns off the power when boiling, lack of water and removed from the stand.\n\nCONVENIENT DESIGN\nThe removable microfilter will not allow scale to get into the cup. The lid opens with a light touch on the wide button, so your hands stay away from the jets of steam.',
            categories: [
                {
                    id: 'deccc8ac-6aef-4fdb-bb8d-22d3ad6a4e3d',
                },
            ],
            allVariants: [
                {
                    attributesRaw: [
                        {
                            name: 'color',
                            value: [
                                {
                                    key: 'color-silver',
                                    label: 'silver',
                                },
                            ],
                        },
                        {
                            name: 'material',
                            value: [
                                {
                                    key: 'material-glass',
                                    label: 'Glass',
                                },
                            ],
                        },
                        {
                            name: 'volume',
                            value: [
                                {
                                    key: 'volume-one-seven',
                                    label: '1.7 L',
                                },
                            ],
                        },
                        {
                            name: 'brand',
                            value: [
                                {
                                    key: 'brand-philips',
                                    label: 'Philips',
                                },
                            ],
                        },
                    ],
                    images: [
                        {
                            url: 'https://83c548175751107cbc78-7e6ca5812cd490d87dba64b458c8c635.ssl.cf3.rackcdn.com/20069500bb-w36wY7Ue.jpg',
                            label: 'main',
                        },
                        {
                            url: 'https://83c548175751107cbc78-7e6ca5812cd490d87dba64b458c8c635.ssl.cf3.rackcdn.com/20069500bb1-CFkaNN6V.jpg',
                            label: null,
                        },
                        {
                            url: 'https://83c548175751107cbc78-7e6ca5812cd490d87dba64b458c8c635.ssl.cf3.rackcdn.com/20069500bb3-L6nAEJMQ.jpg',
                            label: null,
                        },
                    ],
                    prices: [
                        {
                            discounted: {
                                discount: {
                                    id: '531c7259-ef69-47ed-a4ff-7378a582658f',
                                    typeId: 'product-discount',
                                },
                                value: {
                                    centAmount: 4654,
                                    currencyCode: 'GBP',
                                    fractionDigits: 2,
                                    type: 'centPrecision',
                                },
                            },
                            value: {
                                centAmount: 4899,
                                currencyCode: 'GBP',
                                fractionDigits: 2,
                                type: 'centPrecision',
                            },
                        },
                    ],
                },
            ],
            id: '75cac563-1c34-4274-ab6e-32806b07b28d',
        },
    ],
};
