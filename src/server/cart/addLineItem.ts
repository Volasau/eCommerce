// import { bearer_token_pf } from '../../pages/logReg/validation/authorizationFunctions/logInToServer';
import { constants } from '../../data/constants';
import { Product } from '@commercetools/platform-sdk';
import { getProductsId } from '../products/queryProductById';
import { request } from '../classes/requestClass';
import { PARSE } from '../interfaces/parseEnum';
// import { bearerTokenAs } from '../..';

export class AddLineItem {
    private apiUrl: string;
    private accessToken: string;
    private cartVersion: number;

    constructor(cartId: string) {
        this.cartVersion = 1;
        this.apiUrl = `${constants.apiUrl}/carts/${cartId}/`;
        this.accessToken = localStorage.getItem('anonymousToken') as string;
    }

    async addToCart() {
        return new Promise((resolve, reject) => {
            const clickHandler = async (event: Event): Promise<void> => {
                try {
                    const target = event.target as HTMLButtonElement;
                    console.log(target);
                    const productBlock: Product = await getProductsId();
                    const productId: string = productBlock.id;

                    const requestData = {
                        version: this.cartVersion,
                        actions: [
                            {
                                action: 'addLineItem',
                                productId,
                                variantId: 1,
                                quantity: 1,
                                supplyChannel: {
                                    typeId: 'channel',
                                    id: '64bdda1d-8456-4d08-9b9d-7d33dbc16dac',
                                },
                                distributionChannel: {
                                    typeId: 'channel',
                                    id: '13ccf5d9-5aab-4f01-b737-eb7cf207032f',
                                },
                                // shippingDetails: {
                                //     targets: [
                                //         {
                                //             addressKey: 'AddressKeyStringFromAddress',
                                //             quantity: 2,
                                //         },
                                //     ],
                                // },
                            },
                        ],
                    };
                    console.log(this.accessToken);
                    const auth = `Bearer ${this.accessToken}`;
                    const response = await request.postAuth(this.apiUrl, auth, PARSE.Json, JSON.stringify(requestData));

                    if (!response.ok) {
                        throw new Error(`Failed to add line item. Status: ${response.status}`);
                    }

                    const responseData = await response.json();
                    this.cartVersion += 1;
                    if (responseData) {
                        resolve(responseData);
                    } else {
                        reject('Line is not added');
                    }

                    return responseData;
                } catch (error) {
                    console.error('Error with adding line item');
                }
            };
            document.addEventListener('click', clickHandler);
        });
    }
}
